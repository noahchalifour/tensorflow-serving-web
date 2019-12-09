const extractZip = require('extract-zip');
const path = require('path');
const rimraf = require('rimraf');
const axios = require('axios');

// const tensorflow = require('../../utils/tensorflow');

let uploadStatus = {};

function getModels(callback) {

    tensorflow.getConfig(function(err, modelServerConfig) {

        if (err) {
            return callback(err);
        }

        const modelConfigList = modelServerConfig.getModelConfigList();
        const configList = modelConfigList.getConfigList();

        let models = configList.map(modelConfig => {

            const name = modelConfig.getName();
            const modelPlatform = modelConfig.getModelPlatform();

            return {
                name: name,
                platform: modelPlatform,
                upload_status: uploadStatus[name] ? uploadStatus[name] : 'Success'
            }

        });

        for (model of Object.keys(uploadStatus)) {
            if (uploadStatus[model] != 'Success') {
                models.push({
                    name: model,
                    upload_status: uploadStatus[model]
                })
            }
        }

        return callback(null, models);

    });

}

function getModelStatusByName(name, callback) {

    axios.get(`${tensorflow.SERVING_REST}/v1/models/${name}`)
        .then(
            (response) => {
                return callback(null, response.data)
            },
            (error) => {
                return callback(error)
            }
        )

}

function addModel(modelConfig, modelZip, callback) {

    uploadStatus[modelConfig.name] = 'Uploading...';

    extractZip(modelZip.tempFilePath, {
        dir: path.join(process.env.TF_MODELS_PATH, modelConfig.name, '1')
    }, function(err) {

        if (err) {
            return callback(err);
        }

        return tensorflow.addModelConfig(modelConfig, function(err, result) {

            if (err && err.code != 2) {
                uploadStatus[modelConfig.name] = 'Failed';
                return callback(err);
            }

            uploadStatus[modelConfig.name] = 'Success';

        });

    });

}

function deleteModel(name, callback) {

    delete uploadStatus[name];

    rimraf(path.join(process.env.TF_MODELS_PATH, name), function(err) {

        if (err) {
            return callback(err);
        }

        return tensorflow.removeModelConfig(name, function(err) {

            if (err && err.code != 2) {
                return callback(err);
            }

        })

    })

}

module.exports = {
    getModels,
    getModelStatusByName,
    addModel,
    deleteModel
}