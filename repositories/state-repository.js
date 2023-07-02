const dbConnection = require('./../common/db-connection');

/** get all states */

const getAllStates = async () => {
    const [results, metadata] = await dbConnection.query(`SELECT * FROM state`);
    return results;
}

/** get a state by its id */

const getStateByID = async (stateID) => {
    const [result] = await dbConnection.query(`SELECT * FROM state WHERE id = ?`, {
        replacements: [stateID]
    })
    return result
}

/** add a new state */

const insertState = async (state) => {
    const [result] = await dbConnection.query(`INSERT INTO state (state_name) VALUES (?)`, {
        replacements: [state.state_name]
    })

    return result;
}

/** update a state */

const updateState = async (state, stateID) => {
    const [result] = await dbConnection.query(`UPDATE state SET state_name = ? WHERE id = ?`, {
        replacements: [state.state_name, stateID]
    })

    return result;
}

/** delete a state */

const deleteState = async (stateID) => {
    const [result] = await dbConnection.query(`DELETE FROM state WHERE id = ?`, {
        replacements: [stateID]
    })
}

module.exports = {
    getAllStates,
    getStateByID,
    insertState,
    updateState,
    deleteState
}