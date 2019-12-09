const express = require('express');
const fileUpload = require('express-fileupload');

const ModelsController = require('../controllers/ModelsController');

const tensorflow = require('../../utils/tensorflow');

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

    if (!req.body.model_platform) {
        return res.status(400).json({
            messageText: 'You must specify a model platform.'
        })
    }

    if (!req.files.model) {
        return res.status(400).json({
            messageText: 'You must upload a model as zip.'
        })
    }

    res.status(200).json({
        messageText: 'Started model upload.'
    });

    ModelsController.addModel(req.body, req.files.model, function(err, model) {

        if (err) {
            console.error('Error adding model:', err);
        }

    });

})

router.all('*', function(req, res) {

    return res.status(301)
        .redirect(`${tensorflow.SERVING_REST}/v1/models${req.url}`);

})

module.exports = router;