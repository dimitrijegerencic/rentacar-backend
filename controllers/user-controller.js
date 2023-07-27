const userRepository = require('./../repositories/user-repository');

const getUserByEmailAndPassword = async (request, response) => {
    const email = request.params.email;
    const password = request.params.password;
    const result = await userRepository.getUserByEmailAndPassword(email, password);
    response.send(result);
}

const insertUser = async (request, response) => {
    const result = await userRepository.insertUser(request.body);

    response.send({ result });
}

const updateUser = async (request, response) => {
    const result = await userRepository.updateUser(request.body, request.params.userID);

    response.send(result);
}

const getUserByID = async (request, response) => {
    const id = request.params.userID;
    const result = await userRepository.getUserByID(userID);
    response.send(result);
}

const login = async (req, res) => {
    const result = await userRepository.login(req.body);
    res.send(result)
}

module.exports = {
    getUserByEmailAndPassword,
    insertUser,
    updateUser,
    getUserByID,
    login
}











