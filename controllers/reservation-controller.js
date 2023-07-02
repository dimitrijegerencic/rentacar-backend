const { request } = require('express');
const dbConnection = require('../common/db-connection');
const reservationRepository = require('./../repositories/reservation-repository');

const getAllReservations = async (request, response) => {
    const results = await reservationRepository.getAllReservations();
    response.send(results);
}

const getReservationsForUser = async (request, response) => {
    const userID = request.params.id;
    const result = await reservationRepository.getReservationsForUser(userID)
    response.send(result);
}

const getReservationByID = async (request, response) => {
    const reservationID = request.params.id;
    const result = await reservationRepository.getReservationByID(reservationID);
    response.send(result);
}

const insertReservation = async (request, response) => {
    const reservationToBeAdded = await reservationRepository.insertReservation(request.body);
    response.send({ reservationToBeAdded });
}

const updateReservation = async (request, response) => {
    const id = request.params.id;
    const result = await reservationRepository.updateReservation(request.body, id);
    response.send(result);
}

const deleteReservation = async (request, response) => {
    const id = request.params.id;
    const result = await reservationRepository.deleteReservation(id);
    response.send(result);
}

module.exports = {
    getAllReservations,
    getReservationByID,
    getReservationsForUser,
    insertReservation,
    updateReservation,
    deleteReservation
};