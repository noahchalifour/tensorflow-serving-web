const extractZip = require('extract-zip');
const path = require('path');
const rimraf = require('rimraf');
const axios = require('axios');

const tensorflow = require('../../utils/tensorflow');

let uploads = {};
let locked = false;
let tfQueue = [];

function setupQueue() {

    setInterval(function() {

        if (!locked && tfQueue.length > 0) {
            locked = true;
            tfQueue[0](function() {
                tfQueue.shift();
                locked = false;
            });
        }
        
    }, 10000);

}

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
                upload: uploads[name] ? {
                    status: uploads[name].status,
                    error: uploads[name].error
                } : {}
            }

        });

        for (model of Object.keys(uploads)) {
            if (uploads[model].status != 'Success' && uploads[model].status != 'Deleting...') {
                models.push({
                    name: model,
                    upload: {
                        status: uploads[model].status,
                        error: uploads[model].error
                    }
                })
            }
        }

        return callback(null, models);

    });

}

function getModelStatus(name, version, callback) {

    let url = `${tensorflow.SERVING_REST}/v1/models/${name}`;
    if (version != null) {
        url += `/versions/${version}`;
    }

    axios.get(url)
        .then(
            (response) => {
                let result = response.data;
                for (i in result.model_version_status) {
                    result.model_version_status[i].upload = uploads[name].versions[result.model_version_status[i].version];
                }
                return callback(null, result);
            },
            (error) => {
                return callback(error)
            }
        )

}

function getModelMetadata(name, version, callback) {

    let url = `${tensorflow.SERVING_REST}/v1/models/${name}`;
    if (version != null) {
        url += `/versions/${version}`;
    }
    url += '/metadata';

    axios.get(url)
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

    uploads[modelConfig.name] = {
        status: 'Waiting...',
        versions: {}
    }

    tfQueue.push(function(_callback) {

        uploads[modelConfig.name] = {
            status: 'Uploading...',
            versions: {}
        };
    
        addModelVersion(modelConfig.name, '1', modelZip, function(err) {
    
            if (err) {
                uploads[modelConfig.name].status = 'Failed';
                uploads[modelConfig.name].error = err.message;
                return _callback(err);
            }
    
            return tensorflow.addModelConfig(modelConfig, function(err, result) {
    
                if (err && err.code != 2) {
                    uploads[modelConfig.name].status = 'Failed';
                    uploads[modelConfig.name].error = err.message;
                    uploads[modelConfig.name].versions['1'] = {
                        status: 'Failed',
                        error: err.message
                    };
                    return _callback(err);
                }
    
                uploads[modelConfig.name].status = 'Success';
                uploads[modelConfig.name].versions['1'] = {
                    status: 'Success'
                };

                return _callback();
    
            });
    
        });

    });

    return callback();

}

function addModelVersion(name, version, modelZip, callback) {

    uploads[name].versions[version] = {
        status: 'Uploading...'
    }

    extractZip(modelZip.tempFilePath, {
        dir: path.join(process.env.TF_MODELS_PATH, name, version)
    }, function(err) {

        if (err) {
            uploads[name].versions[version] = {
                status: 'Failed',
                error: err.message
            };
            return callback(err);
        }

        uploads[name].versions[version] = {
            status: 'Success'
        };

        return callback();

    });

}

function deleteModel(name, callback) {

    uploads[name].status = 'Deleting...';

    // rimraf(path.join(process.env.TF_MODELS_PATH, name), function(err) {

    //     if (err) {
    //         uploads[name].status = 'Delete Failed';
    //         uploads[name].error = err.message;
    //         return callback(err);
    //     }

    //     uploads[name].status = 'Deleted';

    // })

    tfQueue.push(function(_callback) {

        tensorflow.removeModelConfig(name, function(err) {

            if (err && err.code != 2) {
                uploads[name].status = 'Delete Failed';
                uploads[name].error = err.message;
                return _callback(err);
            }

            rimraf(path.join(process.env.TF_MODELS_PATH, name), function(err) {

                if (err) {
                    uploads[name].status = 'Delete Failed';
                    uploads[name].error = err.message;
                    return _callback(err);
                }
        
                // delete uploads[name];
                uploads[name].status = 'Deleted';

                return _callback();
        
            })

        });

    });

    return callback();

}

function deleteModelVersion(name, version, callback) {

    uploads[name].versions[version].status = 'Deleting...';

    rimraf(path.join(process.env.TF_MODELS_PATH, name, version), function(err) {

        if (err) {
            uploads[name].versions[version].status = 'Delete Failed';
            uploads[name].versions[version].error = err.message;
            return callback(err);
        }

        delete uploads[name].versions[version];

    })

}

module.exports = {
    setupQueue,
    getModels,
    getModelStatus,
    getModelMetadata,
    addModel,
    addModelVersion,
    deleteModel,
    deleteModelVersion
}