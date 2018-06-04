exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("weathers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("weathers").insert([
        {
          id: 0,
          firstWeather: [],
          secondWeather: []
        }
      ]);
    });
};
