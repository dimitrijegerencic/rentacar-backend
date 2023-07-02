const { request } = require('express');
const dbConnection = require('../common/db-connection');
const modelRepository = require('../repositories/model-repository');

const getAllModels = async (request, response) => {
    const results = await modelRepository.getAllModels();
    response.send(results);
}

const getModelByID = async (request, response) => {
    const cityID = request.params.id;
    const result = await modelRepository.getModelByID(cityID);
    response.send(result);
}

const insertModel = async (request, response) => {
    const cityToBeAdded = await modelRepository.insertModel(request.body);
    response.send({ cityToBeAdded });
}

const updateModel = async (request, response) => {
    const id = request.params.id;
    const result = await modelRepository.updateModel(request.body, id);
    response.send(result);
}

const deleteModel = async (request, response) => {
    const id = request.params.id;
    const result = await modelRepository.deleteModel(id);
    response.send(result);
}

module.exports = {
    getAllModels,
    getModelByID,
    insertModel,
    updateModel,
    deleteModel
};