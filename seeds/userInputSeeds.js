
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userInput').del()
    .then(function () {
      // Inserts seed entries
      return knex('userInput').insert([
        {id: 1, startCity: 'Denver'},
        {id: 2, startState: 'CO'},
        {id: 3, endCity: 'Denver'},
        {id: 3, endState: 'CO'}
      ]);
    });
};
