const express = require('express');
const router = express.Router();

const companyController = require('./../controllers/company-controller');

router.route('/')
    .get(companyController.getAllCompanies)
    .post(companyController.insertCompany)

router.route('/:id')
    .get(companyController.getCompanyByID)
    .put(companyController.updateCompany)
    .delete(companyController.deleteCompany)

module.exports = router;