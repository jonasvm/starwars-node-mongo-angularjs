const dB = require('../../config/mongodb');
const {ObjectID} = require('mongodb');

function UserDAO() {
}

const collection = "users";

const find = (params = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            const result = await db.collection(collection).find(params).toArray();
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

const findOneAndDelete = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            const params = {_id: ObjectID(id)};
            const result = await db.collection(collection).findOneAndDelete(params);
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

const insertOne = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            const result = await db.collection(collection).insertOne(user);
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

const updateOne = (id, user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            const params = {_id: ObjectID(id)};
            const result = await db.collection(collection).updateOne(params, {$set: user});
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

UserDAO.prototype = {
    insertOne,
    updateOne,
    findOneAndDelete,
    find
};

module.exports = new UserDAO();