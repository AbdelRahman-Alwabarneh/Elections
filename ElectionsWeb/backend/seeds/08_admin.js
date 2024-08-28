// exports.seed = function(knex) {
//   return knex('Admin').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Admin').insert([
//         { Admin_Id: 1, email: 'admin1@example.com', name: 'Admin One', password: 'password1', role: 'superadmin' },
//         { Admin_Id: 2, email: 'admin2@example.com', name: 'Admin Two', password: 'password2', role: 'admin' }
//         // Add other rows as needed with unique Admin_Id
//       ]);
//     });
// };


exports.seed = function(knex) {
  return knex('Admin').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Admin').insert([
        { Admin_Id: 1, email: 'admin1@example.com', name: 'إداري واحد', password: 'password1', role: 'superadmin' },
        { Admin_Id: 2, email: 'admin2@example.com', name: 'إداري اثنان', password: 'password2', role: 'admin' }
        // Add more admins up to 20 records
      ]);
    });
};



