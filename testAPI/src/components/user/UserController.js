const UserDAO = require('./UserDAO')
const {notDeclare} = require('../../Util/HandleErrors');
const UserErrors = require('../user/UserErrors');

function UserController() {
}

const getUsers = async (req, res) => {
    const query = req.query;
    console.log(query);
    try {
        const users = await UserDAO.find(query);
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
};

const insertUser = async (req, res) => {
    const {name, email} = req.body;
    const user = {
        name,
        email
    };
    try {
        await UserErrors.checkAllFields(user);
        await UserDAO.insertOne(user);
        res.status(200).send(`the user: ${JSON.stringify(user)} was inserted`);
    } catch (e) {
        res.status(400).send(e);
    }
};

const updateUser = async (req, res) => {
    const {_id} = req.params;
    const {name, email} = req.body;
    const user = {
        name,
        email
    };
    try {
        await UserErrors.checkAllFields(user);
        const result = await UserDAO.updateOne(_id,user);
        res.status(200).send(`the user:${JSON.stringify(user)} was updated`);
    } catch (e) {
        res.status(400).send(e);
    }
};

const deleteUser = async (req, res) => {
    const {_id} = req.params;
    try {
        const result = await UserDAO.findOneAndDelete(_id);
        res.status(200).send(`the user:${JSON.stringify(result.value)} was deleted`);
    } catch (e) {
        res.status(400).send(e);
    }
}

UserController.prototype = {
    getUsers,
    insertUser,
    updateUser,
    deleteUser
};

module.exports = new UserController();