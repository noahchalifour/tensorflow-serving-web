const tensorflow = require('../../utils/tensorflow');
const extractZip = require('extract-zip');
const path = require('path');

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
                model_platform: modelPlatform,
                status: uploadStatus[name] ? uploadStatus[name] : 'success'
            }

        });

        for (model of Object.keys(uploadStatus)) {
            if (uploadStatus[model] != 'success') {
                models.push({
                    name: model,
                    status: uploadStatus[model]
                })
            }
        }

        return callback(null, models);

    });

}

function addModel(modelConfig, modelZip, callback) {

    uploadStatus[modelConfig.name] = 'uploading';

    extractZip(modelZip.tempFilePath, {
        dir: path.join(process.env.TF_MODELS_PATH, modelConfig.name, '1')
    }, function(err) {

        if (err) {
            return callback(err);
        }

        return tensorflow.addModelConfig(modelConfig, function(err, result) {

            if (err && err.code != 2) {
                uploadStatus[modelConfig.name] = 'failed';
                return callback(err);
            }

            uploadStatus[modelConfig.name] = 'success';

        });

    });

}

module.exports = {
    getModels,
    addModel
}