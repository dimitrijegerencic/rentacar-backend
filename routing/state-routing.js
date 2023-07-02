const express = require('express');
const router = express.Router();

const stateController = require('./../controllers/state-controller');

router.route('/')
    .get(stateController.getAllStates)
    .post(stateController.insertState)

router.route('/:id')
    .get(stateController.getStateByID)
    .put(stateController.updateState)
    .delete(stateController.deleteState)

module.exports = router;