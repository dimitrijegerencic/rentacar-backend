const { request } = require('express');
const dbConnection = require('../common/db-connection');
const classRepository = require('../repositories/class-repository');

const getAllClasses = async (request, response) => {
    const results = await classRepository.getAllClasses();
    response.send(results);
}

const getClassByID = async (request, response) => {
    const classID = request.params.id;
    const result = await classRepository.getClassByID(classID);
    response.send(result);
}

const insertClass = async (request, response) => {
    const classToBeAdded = await classRepository.insertClass(request.body);
    response.send({ classToBeAdded });
}

const updateClass = async (request, response) => {
    const id = request.params.id;
    const result = await classRepository.updateClass(request.body, id);
    response.send(result);
}

const deleteClass = async (request, response) => {
    const id = request.params.id;
    const result = await classRepository.deleteClass(id);
    response.send(result);
}

module.exports = {
    getAllClasses,
    getClassByID,
    insertClass,
    updateClass,
    deleteClass
};