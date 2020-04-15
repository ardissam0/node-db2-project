
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('VIN').unique().notNullable();
      tbl.string('Make').index();
      tbl.string('Model').index();
      tbl.integer('Mileage');
      tbl.string('Transmission').index();
      tbl.string('Title').index();
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
