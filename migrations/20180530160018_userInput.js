exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_input", table => {
    table.string("userName");
    table.string("startCity");
    table.string("startState");
    table.string("startZip");
    table.string("endCity");
    table.string("endState");
    table.string("endZip");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_input");
};
