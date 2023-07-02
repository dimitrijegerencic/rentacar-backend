const dbConnection = require('./../common/db-connection');

/** get all states */

const getAllClasses = async () => {
    const [results] = await dbConnection.query(`SELECT * FROM class`);
    return results;
}

// /** get a state by its id */

const getClassByID = async (classID) => {
    const [result] = await dbConnection.query(`SELECT * FROM class WHERE id = ?`, {
        replacements: [classID]
    })
    return result
}

/** add a new state */

const insertClass = async (classObj) => {
    const [result] = await dbConnection.query(`INSERT INTO class (class_name) VALUES (?)`, {
        replacements: [classObj.class_name]
    })

    return result;
}

/** update a class */

const updateClass = async (classObj, classID) => {
    const [result] = await dbConnection.query(`UPDATE class SET class_name = ? WHERE id = ?`, {
        replacements: [classObj.class_name, classID]
    })

    return result;
}

/** delete a state */

const deleteClass = async (classID) => {
    const [result] = await dbConnection.query(`DELETE FROM class WHERE id = ?`, {
        replacements: [classID]
    })
}

module.exports = {
    getAllClasses,
    getClassByID,
    insertClass,
    updateClass,
    deleteClass
}