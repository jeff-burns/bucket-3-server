exports.up = function(knex, Promise) {
  return knex.schema.createTable("weathers", table => {
    table.increments("id");
    table.json("firstWeather");
    table.json("secondWeather");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("weathers");
};
