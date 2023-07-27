const companyRepository = require('../repositories/company-repository');

const getAllCompanies = async (request, response) => {
    const results = await companyRepository.getAllCompanies();
    response.send(results);
}

const getCompanyByID = async (request, response) => {
    const companyID = request.params.id;
    const result = await companyRepository.getCompanyByID(companyID);
    response.send(result);
}

const insertCompany = async (request, response) => {
    const companyToBeAdded = await companyRepository.insertCompany(request.body);
    response.send({ companyToBeAdded });
}

const updateCompany = async (request, response) => {
    const id = request.params.id;
    const result = await companyRepository.updateCompany(request.body, id);
    response.send(result);
}

const deleteCompany = async (request, response) => {
    const id = request.params.id;
    const result = await companyRepository.deleteCompany(id);
    response.send(result);
}

module.exports = {
    getAllCompanies,
    getCompanyByID,
    insertCompany,
    updateCompany,
    deleteCompany
};