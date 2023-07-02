const dbConnection = require('./../common/db-connection');

/** get all states */

const getAllCities = async () => {
    const [results] = await dbConnection.query(`SELECT city.id, city.city_name, state.state_name
    FROM city
    JOIN state ON city.state_id = state.id`);
    return results;
}

/** get a state by its id */

const getCityByID = async (cityID) => {
    const [result] = await dbConnection.query(`SELECT * FROM city WHERE id = ?`, {
        replacements: [cityID]
    })
    return result
}

/** add a new state */

const insertCity = async (city) => {
    const [result] = await dbConnection.query(`INSERT INTO city (city_name, state_id) VALUES (?,?)`, {
        replacements: [city.city_name, city.state_id]
    })

    return result;
}

/** update a city */

const updateCity = async (city, cityID) => {
    const [result] = await dbConnection.query(`UPDATE city SET city_name = ?, state_id = ? WHERE id = ?`, {
        replacements: [city.city_name, city.state_id, cityID]
    })

    return result;
}

/** delete a state */

const deleteCity = async (cityID) => {
    const [result] = await dbConnection.query(`DELETE FROM city WHERE id = ?`, {
        replacements: [cityID]
    })
}

module.exports = {
    getAllCities,
    getCityByID,
    insertCity,
    updateCity,
    deleteCity
}