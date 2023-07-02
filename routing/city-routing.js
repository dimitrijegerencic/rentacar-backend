const express = require('express');
const router = express.Router();

const cityController = require('./../controllers/city-controller');

router.route('/')
    .get(cityController.getAllCities)
    .post(cityController.insertCity)

router.route('/:id')
    .get(cityController.getCityByID)
    .put(cityController.updateCity)
    .delete(cityController.deleteCity)

module.exports = router;