const fs = require('fs');
const path = require('path');
const grpc = require('grpc');

const model_service_grpc_pb = require('../proto/tensorflow_serving/apis/model_service_grpc_pb');
const model_management_pb = require('../proto/tensorflow_serving/apis/model_management_pb');
const model_server_config_pb = require('../proto/tensorflow_serving/config/model_server_config_pb');

const SERVING_HOST = process.env.TF_SERVING_HOST || 'localhost';
const SERVING_GRPC_PORT = process.env.TF_SERVING_GRPC_PORT || 8500;
const SERVING_REST_PORT = process.env.TF_SERVING_REST_PORT || 8501;

const SERVING_REST = `http://${SERVING_HOST}:${SERVING_REST_PORT}`;
const SERVING_GRPC = `${SERVING_HOST}:${SERVING_GRPC_PORT}`;

const CONFIG_PATH = process.env.TF_CONFIG_PATH || './test.conf';

function initConfig(callback) {

    fs.writeFile(CONFIG_PATH, `model_config_list: {}`, function(err) {

        if (callback) {
            return callback(err);
        }

    });

}

function getConfig(callback) {

    fs.readFile(CONFIG_PATH, function(err, data) {

        if (err) {
            return callback(err);
        }

        const configText = data.toString();

        try {

            const modelServerConfig = new model_server_config_pb.ModelServerConfig();
            const configList = new model_server_config_pb.ModelConfigList();

            let config = parseConfig(configText).model_config_list;

            if (!Array.isArray(config)) {
                if (config.config) {
                    config = [config.config];
                } else {
                    config = [];
                }
            }

            for (model of config) {
                const oneConfig = new model_server_config_pb.ModelConfig();
                oneConfig.setName(model.name);
                oneConfig.setBasePath(model.base_path);
                oneConfig.setModelPlatform(model.model_platform);
                configList.addConfig(oneConfig);
            }

            modelServerConfig.setModelConfigList(configList);
            
            return callback(null, modelServerConfig);

        } catch (error) {

            return callback(error);

        }

    })

}

function saveConfig(modelServerConfig, callback) {

    let configStr = 'model_config_list: {';

    const modelConfigList = modelServerConfig.getModelConfigList();
    const configList = modelConfigList.getConfigList();

    for (model of configList) {
        const name = model.getName();
        const basePath = model.getBasePath();
        const modelPlatform = model.getModelPlatform();
        configStr += `config: {name: "${name}", base_path: "${basePath}", model_platform: "${modelPlatform}"},`;
    }

    if (configList.length > 0) {
        configStr = configStr.slice(0, configStr.length - 1);
    }
    
    configStr += '}';

    return fs.writeFile(CONFIG_PATH, configStr, callback);

}

function addModelConfig(modelConfig, callback) {

    const stub = new model_service_grpc_pb.ModelServiceClient(SERVING_GRPC, grpc.credentials.createInsecure());
    const request = new model_management_pb.ReloadConfigRequest();

    getConfig(function(err, modelServerConfig) {

        if (err) {
            return callback(err);
        }

        const configList = modelServerConfig.getModelConfigList();

        const oneConfig = new model_server_config_pb.ModelConfig();
        oneConfig.setName(modelConfig.name);
        oneConfig.setBasePath(path.join('/models', modelConfig.name));
        oneConfig.setModelPlatform(modelConfig.platform);
    
        configList.addConfig(oneConfig);
    
        modelServerConfig.setModelConfigList(configList);
        request.setConfig(modelServerConfig);

        stub.handleReloadConfigRequest(request, function(err, response) {

            if (err) {
                return callback(err);
            }

            saveConfig(modelServerConfig, function(err) {

                if (err) {
                    return callback(err);
                }

                return callback(null, response);

            });

        });

    });

}

function removeModelConfig(name, callback) {

    const stub = new model_service_grpc_pb.ModelServiceClient(SERVING_GRPC, grpc.credentials.createInsecure());
    const request = new model_management_pb.ReloadConfigRequest();

    getConfig(function(err, modelServerConfig) {

        if (err) {
            return callback(err);
        }

        const modelConfigList = modelServerConfig.getModelConfigList();
        const configList = modelConfigList.getConfigList();
        const newConfigList = configList.filter(config => config.getName() != name);

        if (configList.length == newConfigList.length) {
            return callback(`Could not find model with name: ${name}`);
        }

        const newModelConfigList = new model_server_config_pb.ModelConfigList();
        newModelConfigList.setConfigList(newConfigList);
    
        modelServerConfig.setModelConfigList(newModelConfigList);
        request.setConfig(modelServerConfig);

        stub.handleReloadConfigRequest(request, function(err, response) {

            if (err) {
                return callback(err);
            }

            saveConfig(modelServerConfig, function(err) {

                if (err) {
                    return callback(err);
                }

                return callback(null, response);

            });

        });

    });

}

function parseConfig(configString) {

    let _configString = '{' + configString.replace(/\n/g, '') + '}';
    const parseResult = _parseObject(_configString);

    return parseResult[0];

}

function _parseObject(objectString) {

    let objects = [{}];
    let isArray = false;

    do {

        objectString = objectString.slice(1).trim()

        if (objectString[0] == '}') {
            break;
        }

        const keyResult = _key_lex(objectString);
        const key = keyResult[0];
        objectString = keyResult[1];
    
        if (objectString[0] == '{') {
            const parseResult = _parseObject(objectString);
            objects[objects.length - 1][key] = parseResult[0];
            objectString = parseResult[1];
            if (parseResult[2]) {
                objects.push({});
            }
        } else {
            const strResult = _string_lex(objectString);
            if (strResult[0] != null) {
                objects[objects.length - 1][key] = strResult[0];
                objectString = strResult[1];
            }
        }

        if (objectString.slice(0, 2) == '},') {
            isArray = true;
        }

    } while (objectString[0] == ',');

    objectString = objectString.slice(1).trim();

    if (objects.length == 1) {
        return [objects[0], objectString, isArray];
    }

    return [objects, objectString, isArray];

}


function _key_lex(string) {

    let i = 0;
    while (i < string.length && string[i] != ':') {
        i += 1
    }

    const key = string.slice(0, i).trim();
    const _string = string.slice(i + 1).trim();

    return [key, _string];

}

function _string_lex(string) {

    const quotes = ['"', "'"];

    if (!quotes.includes(string[0])) {
        return [null, string];
    }

    let i = 1;
    while (i < string.length && !quotes.includes(string[i])) {
        i += 1;
    }

    const str = string.slice(1, i).trim();
    const _string = string.slice(i + 1).trim()

    return [str, _string];

}

module.exports = {
    initConfig,
    getConfig,
    addModelConfig,
    removeModelConfig,
    CONFIG_PATH,
    SERVING_REST,
    SERVING_GRPC
}