const express = require('express');
const router = express.Router();

const reservationController = require('./../controllers/reservation-controller');

router.route('/')
    .get(reservationController.getAllReservations)
    .post(reservationController.insertReservation)

router.route('/:id')
    .get(reservationController.getReservationByID)
    .get(reservationController.getReservationsForUser)
    .delete(reservationController.deleteReservation)

router.route('/user/:id')
    .get(reservationController.getReservationsForUser)

module.exports = router;