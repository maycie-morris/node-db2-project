
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 17).notNullable().unique();
    tbl.string('make').notNullable().index();
    tbl.string('model').notNullable().index();
    tbl.decimal('mileage', 8, 2).notNullable();
    tbl.string('transmission');
    tbl.string('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
