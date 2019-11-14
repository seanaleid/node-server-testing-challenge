const db = require('../data/dbConfig.js');

module.exports = {
    insert, 
};

function insert(user) {
    return db('users').insert(user, 'id')
}