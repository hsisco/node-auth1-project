
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Shel', password: 'qwerty'},
        {id: 2, username: 'Silver', password: 'qwerty'},
        {id: 3, username: 'Stein', password: 'qwerty'},
      ]);
    })
};