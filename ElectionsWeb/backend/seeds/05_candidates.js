// exports.seed = function(knex) {
//   return knex('Candidates').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Candidates').insert([
//         { Circle: 1, Election_id: 1, ListId: 1, N_Id: 1 }, // Ensure N_Id 1 exists in the referenced table
//         { Circle: 2, Election_id: 1, ListId: 2, N_Id: 2 }  // Ensure N_Id 2 exists in the referenced table
//         // Add other rows as needed
//       ]);
//     });
// };



exports.seed = function(knex) {
  return knex('Candidates').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Candidates').insert([
        { Circle: 1, Election_id: 1, ListId: 1, N_Id: 1 },
        { Circle: 2, Election_id: 1, ListId: 2, N_Id: 2 },
        // Add more candidates up to 20 records
      ]);
    });
};


