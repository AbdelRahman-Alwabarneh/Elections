// exports.seed = function(knex) {
//   return knex('ElectionType').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('ElectionType').insert([
//         { id: 1, Election_type: 'Type A' },
//         { id: 2, Election_type: 'Type B' },
//         // Ensure all id values are unique
//       ]);
//     });
// };



exports.seed = function(knex) {
  return knex('ElectionType').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('ElectionType').insert([
        { id: 1, Election_type: 'الانتخابات النيابية' },
        { id: 2, Election_type: 'الانتخابات البلدية' }
        // Add more records if needed
      ]);
    });
};


