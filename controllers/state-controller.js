const { request } = require('express');
const dbConnection = require('./../common/db-connection');
const stateRepository = require('./../repositories/state-repository');

const getAllStates = async (request, response) => {
    const results = await stateRepository.getAllStates();
    response.send(results);
}

const getStateByID = async (request, response) => {
    const stateID = request.params.id;
    const result = await stateRepository.getStateByID(stateID);
    response.send(result);
}

const insertState = async (request, response) => {
    const stateToBeAdded = await stateRepository.insertState(request.body);
    response.send({ stateToBeAdded });
}

const updateState = async (request, response) => {
    const id = request.params.id;
    const result = await stateRepository.updateState(request.body, id);
    response.send(result);
}

const deleteState = async (request, response) => {
    const id = request.params.id;
    const result = await stateRepository.deleteState(id);
    response.send(result);
}

module.exports = {
    getAllStates,
    getStateByID,
    insertState,
    updateState,
    deleteState
};