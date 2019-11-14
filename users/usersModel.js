const db = require('../data/dbConfig.js');

module.exports = {
    insert, 
    find,
};

function insert(user) {
    return db('users').insert(user, 'id')
}

function find() {
    return db('users');
}

function remove() {
    
}