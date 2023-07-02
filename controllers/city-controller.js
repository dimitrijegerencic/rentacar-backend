const { request } = require('express');
const dbConnection = require('../common/db-connection');
const cityRepository = require('../repositories/city-repository');

const getAllCities = async (request, response) => {
    const results = await cityRepository.getAllCities();
    response.send(results);
}

const getCityByID = async (request, response) => {
    const cityID = request.params.id;
    const result = await cityRepository.getCityByID(cityID);
    response.send(result);
}

const insertCity = async (request, response) => {
    const cityToBeAdded = await cityRepository.insertCity(request.body);
    response.send({ cityToBeAdded });
}

const updateCity = async (request, response) => {
    const id = request.params.id;
    const result = await cityRepository.updateCity(request.body, id);
    response.send(result);
}

const deleteCity = async (request, response) => {
    const id = request.params.id;
    const result = await cityRepository.deleteCity(id);
    response.send(result);
}

module.exports = {
    getAllCities,
    getCityByID,
    insertCity,
    updateCity,
    deleteCity
};