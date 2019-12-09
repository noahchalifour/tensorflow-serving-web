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

    ModelsController.getModelStatusByName(req.body.name, function(err, modelStatus) {

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

router.delete('/:name', function(req, res) {

    ModelsController.deleteModel(req.params.name, function(err) {

        if (err) {
            console.error('Error deleting model:', err);
        }

    })

})

module.exports = router;