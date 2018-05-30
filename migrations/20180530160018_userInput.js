
exports.up = function(knex, Promise) {
    return knex.schema.createTable("userInput", table => {
      table.increments();
      table.text("startCity");
      table.text("startState");
      table.text("endCity");
      table.text("endState");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("userInput");
  };
