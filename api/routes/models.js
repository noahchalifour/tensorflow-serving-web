const express = require('express');
const fileUpload = require('express-fileupload');

const ModelsController = require('../controllers/ModelsController');

const router = express.Router();

router.get('/', function(req, res) {

    ModelsController.getModels(function(err, models) {

        if (err) {
            console.error('Error getting models:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred getting models.'
            });
        }

        return res.status(200).json(models);

    });

});

router.post('/add', fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}), function(req, res) {

    if (!req.body.name) {
        return res.status(400).json({
            messageText: 'You must specify a model name.'
        })
    }

    if (!req.body.platform) {
        return res.status(400).json({
            messageText: 'You must specify a model platform.'
        })
    }

    if (!req.files.model) {
        return res.status(400).json({
            messageText: 'You must upload a model as zip.'
        })
    }

    ModelsController.getModelStatus(req.body.name, null, function(err, modelStatus) {

        if (err && err.response.status != 404) {
            console.error(err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred while adding model.'
            })
        }

        if (!err) {
            return res.status(400).json({
                messageText: 'A model with that name already exists.'
            });
        }

        res.status(200).json({
            messageText: 'Started model upload.'
        });
    
        ModelsController.addModel(req.body, req.files.model, function(err, model) {
    
            if (err) {
                console.error('Error adding model:', err);
            }
    
        });

    });

});

router.get('/:name', function(req, res) {

    ModelsController.getModelStatus(req.params.name, null, function(err, modelStatus) {

        if (err) {
            console.error('Error getting model status:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred getting model status.'
            })
        }

        return res.status(200).json(modelStatus);

    });

});

router.post('/:name/versions/add', fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}), function(req, res) {

    if (!req.files.model) {
        return res.status(400).json({
            messageText: 'You must upload a model version as zip.'
        })
    }

    ModelsController.getModelStatus(req.params.name, null, function(err, modelStatus) {

        if (err && err.response.status != 404) {
            console.error('Error adding model version:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred adding model version.'
            })
        }

        if (err) {
            return res.status(404).json({
                messageText: `Could not find model with name: ${req.params.name}`
            });
        }

        res.status(200).json({
            messageText: 'Started model version upload.'
        });

        const latestVersion = Math.max(...modelStatus.model_version_status.map(modelVersion => modelVersion.version));
        const newVersion = latestVersion + 1;

        ModelsController.addModelVersion(req.params.name, `${newVersion}`, req.files.model, function(err) {

            if (err) {
                console.error('Error adding model version:', err);
            }

        })

    })

    

})

router.get('/:name/versions/:version', function(req, res) {

    ModelsController.getModelStatus(req.params.name, req.params.version, function(err, modelStatus) {

        if (err) {
            console.error('Error getting model status:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred getting model status.'
            })
        }

        return res.status(200).json(modelStatus);

    });

});

router.get('/:name/metadata', function(req, res) {

    ModelsController.getModelMetadata(req.params.name, null, function(err, modelMetadata) {

        if (err) {
            console.error('Error getting model metadata:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred getting model metadata.'
            })
        }

        return res.status(200).json(modelMetadata);

    })

})

router.get('/:name/versions/:version/metadata', function(req, res) {

    ModelsController.getModelMetadata(req.params.name, req.params.version, function(err, modelMetadata) {

        if (err) {
            console.error('Error getting model metadata:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred getting model metadata.'
            })
        }

        return res.status(200).json(modelMetadata);

    })

})

router.delete('/:name/versions/:version', function(req, res) {

    ModelsController.getModelStatus(req.params.name, req.params.version, function(err, modelStatus) {

        if (err && err.response.status != 404) {
            console.error('Error deleting model version:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred deleting model version.'
            })
        }

        if (err) {
            return res.status(404).json({
                messageText: `Could not find model with name: ${req.params.name}, version: ${res.params.version}`
            })
        }

        res.status(200).json({
            messageText: 'Deleting model.'
        })

        ModelsController.deleteModelVersion(req.params.name, req.params.version, function(err) {

            if (err) {
                console.error('Error deleting model version:', err);
            }

        })

    });
    
})

router.delete('/:name', function(req, res) {

    ModelsController.getModelStatus(req.params.name, null, function(err, modelStatus) {

        if (err) {
            console.error('Error deleting model version:', err);
            return res.status(500).json({
                messageText: 'An unexpected error occurred deleting model version.'
            })
        }

        if (err) {
            return res.status(404).json({
                messageText: `Could not find model with name: ${req.params.name}`
            })
        }

        res.status(200).json({
            messageText: 'Deleting model.'
        })

        ModelsController.deleteModel(req.params.name, function(err) {

            if (err) {
                console.error('Error deleting model version:', err);
            }

        })

    });

});

module.exports = router;