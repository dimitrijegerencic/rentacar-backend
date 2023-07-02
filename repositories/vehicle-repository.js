const dbConnection = require('./../common/db-connection');

/** get all vehicles */

const getAllVehicles = async () => {
    const [results] = await dbConnection.query(`
    
    SELECT 
    
    vehicle.id, 
    vehicle.reg_num, 
    company.company_name, 
    model.model_name, 
    class.class_name, 
    vehicle.production_year
    
    FROM vehicle
    
    JOIN company ON vehicle.company_id = company.id
    JOIN model ON vehicle.model_id = model.id
    JOIN class ON vehicle.class_id = class.id
    
    `);
    return results;
}

/** get a vehicle by its id */

const getVehicleByID = async (vehicleID) => {
    const [result] = await dbConnection.query(
        ` SELECT 
    
        vehicle.id, 
        vehicle.model_id,
        vehicle.company_id,
        vehicle.class_id,
        vehicle.reg_num, 
        company.company_name, 
        model.model_name, 
        class.class_name, 
        vehicle.production_year
        
        FROM vehicle
        
        JOIN company ON vehicle.company_id = company.id
        JOIN model ON vehicle.model_id = model.id
        JOIN class ON vehicle.class_id = class.id WHERE vehicle.id = ?`,
        {
            replacements: [vehicleID],
        }
    );
    return result;
};

/** add a new vehicle */

const insertVehicle = async (vehicle) => {
    const [result] = await dbConnection.query(`
    INSERT INTO vehicle 
    (reg_num, company_id, model_id, class_id, production_year) 
    VALUES (?,?,?,?,?)`, {
        replacements: [vehicle.reg_num, vehicle.company_id, vehicle.model_id, vehicle.class_id, vehicle.production_year]
    })

    return result;
}

/** update a city */

const updateVehicle = async (vehicle, vehicleID) => {
    const [result] = await dbConnection.query(`UPDATE vehicle SET reg_num = ?, company_id = ?, model_id = ?, class_id = ?, production_year = ?  WHERE id = ?`, {
        replacements: [vehicle.reg_num, vehicle.company_id, vehicle.model_id, vehicle.class_id, vehicle.production_year, vehicleID]
    })

    return result;
}

/** delete a state */

const deleteVehicle = async (vehicleID) => {
    const [result] = await dbConnection.query(`DELETE FROM vehicle WHERE id = ?`, {
        replacements: [vehicleID]
    })
}

module.exports = {
    getAllVehicles,
    getVehicleByID,
    insertVehicle,
    updateVehicle,
    deleteVehicle
}