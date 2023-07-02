const { request } = require('express');
const dbConnection = require('../common/db-connection');
const vehicleRepository = require('../repositories/vehicle-repository.js');

const getAllVehicles = async (request, response) => {
    const results = await vehicleRepository.getAllVehicles();
    response.send(results);
}

const getVehicleByID = async (request, response) => {
    const vehicleID = request.params.id;
    const result = await vehicleRepository.getVehicleByID(vehicleID);
    response.send(result);
}

const insertVehicle = async (request, response) => {
    const vehicleToBeAdded = await vehicleRepository.insertVehicle(request.body);
    response.send({ vehicleToBeAdded });
}

const updateVehicle = async (request, response) => {
    const id = request.params.id;
    const result = await vehicleRepository.updateVehicle(request.body, id);
    response.send(result);
}

const deleteVehicle = async (request, response) => {
    const id = request.params.id;
    const result = await vehicleRepository.deleteVehicle(id);
    response.send(result);
}

module.exports = {
    getAllVehicles,
    getVehicleByID,
    insertVehicle,
    updateVehicle,
    deleteVehicle
};