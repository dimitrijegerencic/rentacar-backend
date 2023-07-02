const dbConnection = require('./../common/db-connection');

/** get all states */

const getAllReservations = async () => {
    const [results, metadata] = await dbConnection.query(`SELECT reservations.id, reservations.user_id, reservations.vehicle_id,
    reservations.start_date, reservations.end_date, reservations.price, user.first_name, user.last_name, vehicle.reg_num, vehicle.production_year
   FROM reservations
   JOIN user ON reservations.user_id = user.id
   JOIN vehicle ON reservations.vehicle_id = vehicle.id`);
    return results;
}

getReservationsForUser = async (userID) => {
    const [results, metadata] = await dbConnection.query(`SELECT reservations.id, reservations.user_id, reservations.vehicle_id,
     reservations.start_date, reservations.end_date, reservations.price, user.first_name, user.last_name, vehicle.reg_num, vehicle.production_year
        FROM reservations
        JOIN user ON reservations.user_id = user.id
        JOIN vehicle ON reservations.vehicle_id = vehicle.id
        WHERE reservations.user_id = ?`, {
        replacements: [userID]
    });

    return results;
}


const getReservationByID = async (reservationID) => {
    const [result] = await dbConnection.query(`SELECT * FROM reservations WHERE id = ?`, {
        replacements: [reservationID]
    })
    return result;
}


const insertReservation = async (reservations) => {
    const [result] = await dbConnection.query(`INSERT INTO reservations (user_id, vehicle_id, start_date, end_date, price) VALUES (?, ?, ?, ?, ?)`, {
        replacements: [reservations.user_id, reservations.vehicle_id, reservations.start_date, reservations.end_date, reservations.price]
    })

    return result;
}


const updateReservation = async (reservations, reservationID) => {
    const [result] = await dbConnection.query(`UPDATE reservations SET user_id = ?, vehicle_id = ?, start_date = ?, end_date = ?,  WHERE id = ?`, {
        replacements: [reservations.user_id, reservations.vehicle_id, reservations.start_date, reservations.end_date, reservationID]
    })

    return result;
}

const deleteReservation = async(reservationID) => {
    const [result] = await dbConnection.query(`DELETE FROM reservations WHERE id = ?`,{
        replacements: [reservationID]
    })
}


module.exports = {
    getAllReservations,
    getReservationsForUser,
    getReservationByID,
    insertReservation,
    updateReservation,
    deleteReservation
}