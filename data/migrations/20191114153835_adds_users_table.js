
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();
        tbl.string('age', 128).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
