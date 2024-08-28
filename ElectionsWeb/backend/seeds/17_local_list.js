// exports.seed = function(knex) {
//   return knex('localList').del() // Clear the table first
//     .then(function () {
//       return knex('localList').insert([
//         {
//           id: 1,
//           N_Id: 1, // Ensure this value exists in the referenced table
//           circle_id: 1,
//           name: 'Sample List 1',
//           numOfVotes: 100,
//           status: 'active'
//         },
//         {
//           id: 2,
//           N_Id: 2, // Ensure this value exists in the referenced table
//           circle_id: 2,
//           name: 'Sample List 2',
//           numOfVotes: 150,
//           status: 'inactive'
//         }
//       ]);
//     });
// };


exports.seed = function(knex) {
  return knex('localList').del() // Clear the table first
    .then(function () {
      return knex('localList').insert([
        {
          id: 1,
          N_Id: 1, // Ensure this value exists in the referenced table
          circle_id: 1,
          name: 'قائمة محلية 1',
          numOfVotes: 100,
          status: 'نشط'
        },
        {
          id: 2,
          N_Id: 2, // Ensure this value exists in the referenced table
          circle_id: 2,
          name: 'قائمة محلية 2',
          numOfVotes: 150,
          status: 'غير نشط'
        }
        // Add more local lists up to 20 records
      ]);
    });
};



