const dbConnection = require('./../common/db-connection');

/** get all companies */

const getAllCompanies = async () => {
    const [results] = await dbConnection.query(`SELECT company.id, company.company_name
    FROM company`);
    return results;
}

/** get a company by its id */

const getCompanyByID = async (companyID) => {
    const [result] = await dbConnection.query(`SELECT * FROM company WHERE id = ?`, {
        replacements: [companyID]
    })
    return result
}

/** add a new company */

const insertCompany = async (company) => {
    const [result] = await dbConnection.query(`INSERT INTO company (company_name) VALUES (?)`, {
        replacements: [company.company_name]
    })

    return result;
}

/** update a company */

const updateCompany = async (company, companyID) => {
    const [result] = await dbConnection.query(`UPDATE company SET company_name = ? WHERE id = ?`, {
        replacements: [company.company_name, companyID]
    })

    return result;
}

/** delete a company */

const deleteCompany = async (companyID) => {
    const [result] = await dbConnection.query(`DELETE FROM company WHERE id = ?`, {
        replacements: [companyID]
    })
}

module.exports = {
    getAllCompanies,
    getCompanyByID,
    insertCompany,
    updateCompany,
    deleteCompany
}