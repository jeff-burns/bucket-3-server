exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_input")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_input").insert([
        {
          userName: "Jeff",
          startCity: "Denver",
          startState: "CO",
          startZip: "80210",
          endCity: "Denver",
          endState: "CO",
          endZip: "80202"
        },
        {
          userName: "John",
          startCity: "Chicago",
          startState: "IL",
          startZip: "60007",
          endCity: "Chicago",
          endState: "IL",
          endZip: "60106"
        }
      ]);
    });
};
