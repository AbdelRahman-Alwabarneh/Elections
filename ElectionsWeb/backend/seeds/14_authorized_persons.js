// exports.seed = function(knex) {
//   return knex('authorizedPersons').del()
//     .then(function () {
//       return knex('authorizedPersons').insert([
//         { auth: 'auth1', auth_id: 1, created_at: new Date(), updated_at: new Date() },
//         { auth: 'auth2', auth_id: 2, created_at: new Date(), updated_at: new Date() } // Unique auth_id
//       ]);
//     });
// };
   


exports.seed = function(knex) {
  return knex('authorizedPersons').del()
    .then(function () {
      return knex('authorizedPersons').insert([
        { auth: 'مصادقة1', auth_id: 1, created_at: new Date(), updated_at: new Date() },
        { auth: 'مصادقة2', auth_id: 2, created_at: new Date(), updated_at: new Date() }
        // Add more authorized persons up to 20 records
      ]);
    });
};



