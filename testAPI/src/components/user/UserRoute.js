var express = require('express');
var router = express.Router();

const UserController = require('./UserController')

router.get('/', (req, res, next) => {
    UserController.getUsers(req, res)
});

router.post('/', (req, res) => {
    UserController.insertUser(req, res);
});

router.put('/:_id', (req, res) => {
    UserController.updateUser(req, res);
});

router.delete('/:_id', (req, res) => {
    UserController.deleteUser(req, res);
});

module.exports = router;