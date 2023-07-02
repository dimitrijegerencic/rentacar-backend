const express = require('express');
const router = express.Router();

const classController = require('./../controllers/class-controller');

router.route('/')
    .get(classController.getAllClasses)
    .post(classController.insertClass)

router.route('/:id')
    .get(classController.getClassByID)
    .put(classController.updateClass)
    .delete(classController.deleteClass)

module.exports = router;