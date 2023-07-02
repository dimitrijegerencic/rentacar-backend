const dbConnection = require('./../common/db-connection');

const getUserByEmailAndPassword = async (email, password) => {
    const [results, metadata] = await dbConnection.query(`SELECT * FROM user WHERE email = ? AND password = ?`, {
        replacements: [email, password]
    });

    return results;
}

const getUserByID = async (userID) => {
    const [results, metadata] = await dbConnection.query(`SELECT * FROM USER WHERE id = ?`, {
        replacements: [userID]
    })

    return results;
}

const insertUser = async (user) => {
    const [results, metadata] = await dbConnection.query(`INSERT INTO user
                                                          (first_name, last_name, email, password,  state_id, city_id)
                                                          VALUES (?, ?, ?, ?, ?, ?)`, {
        replacements: [user.first_name, user.last_name, user.email, user.password, user.state_id, user.city_id]
    });

    return results;
}

const updateUser = async (user, userID) => {
    const [result, metadata] = await dbConnection.query(`UPDATE user 
                                                         SET first_name = ?,
                                                         last_name = ?,
                                                         email = ?,
                                                         password = ?,
                                                         state_id = ?,
                                                         city_id = ?
                                                         WHERE userID = ?`, {
        replacements: [user.first_name, user.last_name, user.email, user.password, user.state_id, user.city_id, userID]
    });

    return result;
}

const login = async (user) => {
    var email = user.email;
    var password = user.password;

    dbConnection.query(`SELECT * FROM user WHERE email = ${email} and password = ${password}`, function (error, results, field) {
        if (results.length > 0) {
            alert("YES")
            res.redirect("/")
        }
        else {
            alert("NO")
            res.redirect("/login")
        }
        res.end()
    })
}

module.exports = {
    getUserByEmailAndPassword,
    getUserByID,
    insertUser,
    updateUser,
    login
}












