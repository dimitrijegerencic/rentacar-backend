const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

const userController = require('./../controllers/user-controller');

router.route('/login')
    .post(userController.login)

router.route('/user')
    .post(userController.insertUser)

router.route('/:id')
    .put(userController.updateUser);

router.route('/user/:email/:password')
    .get(userController.getUserByEmailAndPassword)

module.exports = router;