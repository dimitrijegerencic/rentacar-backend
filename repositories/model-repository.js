const dbConnection = require('./../common/db-connection');

/** get all states */

const getAllModels = async () => {
    const [results] = await dbConnection.query(`SELECT model.id, model.model_name, company.company_name
    FROM model
    JOIN company ON model.company_id = company.id`);

    return results;
}

/** get a state by its id */

const getModelByID = async (modelID) => {
    const [result] = await dbConnection.query(`SELECT * FROM model WHERE id = ?`, {
        replacements: [modelID]
    })
    return result
}

/** add a new state */

const insertModel = async (model) => {
    const [result] = await dbConnection.query(`INSERT INTO model (model_name, company_id) VALUES (?,?)`, {
        replacements: [model.model_name, model.company_id]
    })

    return result;
}

/** update a city */

const updateModel = async (model, modelID) => {
    const [result] = await dbConnection.query(`UPDATE model SET model_name = ?, company_id = ? WHERE id = ?`, {
        replacements: [model.model_name, model.company_id, modelID]
    })

    return result;
}

/** delete a state */

const deleteModel = async (modelID) => {
    const [result] = await dbConnection.query(`DELETE FROM model WHERE id = ?`, {
        replacements: [modelID]
    })
}

module.exports = {
    getAllModels,
    getModelByID,
    insertModel,
    updateModel,
    deleteModel
}