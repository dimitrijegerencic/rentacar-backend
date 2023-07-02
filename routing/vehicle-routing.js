const express = require('express');
const router = express.Router();

const vehicleController = require('./../controllers/vehicle-controller');

router.route('/')
    .get(vehicleController.getAllVehicles)
    .post(vehicleController.insertVehicle)

router.route('/:id')
    .get(vehicleController.getVehicleByID)
    .put(vehicleController.updateVehicle)
    .delete(vehicleController.deleteVehicle)

module.exports = router;