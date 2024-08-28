// exports.seed = function(knex) {
//     return knex('Voters').del()  // Optional: clear the table before seeding
//       .then(function () {
//         return knex('Voters').insert([
//           { N_Id: 1 }, // Ensure N_Id 1 exists in the referenced table
//           { N_Id: 2 }  // Ensure N_Id 2 exists in the referenced table
//           // Add other rows as needed
//         ]);
//       });
//   };
  

exports.seed = function(knex) {
  return knex('Voters').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Voters').insert([
        { N_Id: 1 },
        { N_Id: 2 },
        // Add more voters up to 20 records
      ]);
    });
};



