// exports.seed = function(knex) {
//   return knex('ChatMessages').del()
//     .then(function () {
//       return knex('ChatMessages').insert([
//         { CN_Id: 1, Deleted: false, M_Id: 1, Message: 'Hello!', admin: true, timestamp: new Date() },
//         { CN_Id: 2, Deleted: false, M_Id: 2, Message: 'Hi!', admin: false, timestamp: new Date() }
//       ]);
//     });
// };



exports.seed = function(knex) {
  return knex('ChatMessages').del()
    .then(function () {
      return knex('ChatMessages').insert([
        { CN_Id: 1, Deleted: false, M_Id: 1, Message: 'مرحبا!', admin: true, timestamp: new Date() },
        { CN_Id: 2, Deleted: false, M_Id: 2, Message: 'مرحبا بك!', admin: false, timestamp: new Date() }
        // Add more chat messages up to 20 records
      ]);
    });
};





