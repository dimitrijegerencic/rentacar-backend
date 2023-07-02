const express = require('express');
const router = express.Router();

const modelController = require('./../controllers/model-controller');

router.route('/')
    .get(modelController.getAllModels)
    .post(modelController.insertModel)

router.route('/:id')
    .get(modelController.getModelByID)
    .put(modelController.updateModel)
    .delete(modelController.deleteModel)

module.exports = router;