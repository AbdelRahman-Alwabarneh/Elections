// exports.seed = function(knex) {
//   return knex('Lists').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Lists').insert([
//         { list_id: 1, candidate: 1, circle: 1, file_path: 'path1', logo: 'logo1', name: 'List 1', org: 'Org 1' },
//         { list_id: 2, candidate: 2, circle: 2, file_path: 'path2', logo: 'logo2', name: 'List 2', org: 'Org 2' },
//         // Ensure all candidate IDs and circle IDs are valid and exist in their respective tables
//       ]);
//     });
// };


exports.seed = function(knex) {
  return knex('Lists').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Lists').insert([
        { list_id: 1, candidate: 1, circle: 1, file_path: 'path1', logo: 'logo1', name: 'قائمة 1', org: 'منظمة 1' },
        { list_id: 2, candidate: 2, circle: 2, file_path: 'path2', logo: 'logo2', name: 'قائمة 2', org: 'منظمة 2' },
        // Add more lists up to 20 records
      ]);
    });
};



