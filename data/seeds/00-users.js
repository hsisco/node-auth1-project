
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'Shel', password: 'qwerty'},
        {id: 2, username: 'Silver', password: 'qwerty'},
        {id: 3, username: 'Stein', password: 'qwerty'},
      ]);
    });
};
