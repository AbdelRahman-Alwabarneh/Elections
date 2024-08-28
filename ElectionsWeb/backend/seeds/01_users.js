// exports.seed = function(knex) {
//   return knex('Users').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Users').insert([
//         { N_Id: 1, age: 30, circle_id: 1, city: 'City A', email: 'user1@example.com', gender: 'Male', isOrganizer: false, name: 'User One', otp: '1234', password: 'password1', polling_address: 'Address 1', religion: 'Religion A', token: 'token1' },
//         { N_Id: 2, age: 25, circle_id: 1, city: 'City B', email: 'user2@example.com', gender: 'Female', isOrganizer: true, name: 'User Two', otp: '5678', password: 'password2', polling_address: 'Address 2', religion: 'Religion B', token: 'token2' },
//         // Ensure all N_Id values are unique
//       ]);
//     });
// };

exports.seed = function(knex) {
  return knex('Users').del()
    .then(function () {
      return knex('Users').insert([
        { N_Id: 1, age: 30, circle_id: 1, city: 'عمان', email: 'user1@example.com', gender: 'Male', isOrganizer: false, name: 'أحمد الحسين', otp: '1234', password: 'password1', polling_address: 'شارع الملك حسين', religion: 'مسلم', token: 'token1' },
        { N_Id: 2, age: 25, circle_id: 2, city: 'إربد', email: 'user2@example.com', gender: 'Female', isOrganizer: true, name: 'سارة العلي', otp: '5678', password: 'password2', polling_address: 'شارع الحسن', religion: 'مسيحي', token: 'token2' }
      ]);
    });
};



