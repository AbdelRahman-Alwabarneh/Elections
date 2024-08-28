// exports.seed = function(knex) {
//     return knex('partyrequest').del()  // Optional: clear the table before seeding
//       .then(function () {
//         return knex('partyrequest').insert([
//           { id: 1, created_at: new Date(), updated_at: new Date(), delegate_name: 'John Doe', delegate_email: 'john@example.com', delegate_phone: '1234567890', email: 'johndoe@example.com', name: 'Party A', phone: '0987654321', list_name: 'List A', reason: 'Reason A', status: 'Pending' },
//           { id: 2, created_at: new Date(), updated_at: new Date(), delegate_name: 'Jane Smith', delegate_email: 'jane@example.com', delegate_phone: '2345678901', email: 'janesmith@example.com', name: 'Party B', phone: '8765432109', list_name: 'List B', reason: 'Reason B', status: 'Approved' }
//           // Add more records with unique IDs
//         ]);
//       });
//   };
  

exports.seed = function(knex) {
  return knex('partyrequest').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('partyrequest').insert([
        { id: 1, created_at: new Date(), updated_at: new Date(), delegate_name: 'جود الحسن', delegate_email: 'jood@example.com', delegate_phone: '1234567890', email: 'joodhassan@example.com', name: 'حزب أ', phone: '0987654321', list_name: 'قائمة أ', reason: 'سبب أ', status: 'معلق' },
        { id: 2, created_at: new Date(), updated_at: new Date(), delegate_name: 'ريم السعيد', delegate_email: 'reem@example.com', delegate_phone: '2345678901', email: 'reemsaeed@example.com', name: 'حزب ب', phone: '8765432109', list_name: 'قائمة ب', reason: 'سبب ب', status: 'موافق' }
        // Add more party requests up to 20 records
      ]);
    });
};



