const db = require('../data/dbConfig.js');

module.exports = {
    insert, 
    find,
    remove
};

function insert(user) {
    return db('users').insert(user, 'id')
}

function find() {
    return db('users');
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del()
}