
exports.up = function(knex, Promise) {
    return knex.schema.createTable("weathers", table => {
      table.increments();
      table.text("startWeather");
      table.text("endWeather");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("weathers");
  };
