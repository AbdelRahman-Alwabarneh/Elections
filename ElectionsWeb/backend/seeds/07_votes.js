// exports.seed = function(knex) {
//     return knex('Votes').del()  // Optional: clear the table before seeding
//       .then(function () {
//         return knex('Votes').insert([
//           { Id: 1, candidate_id: 1, isLocal: true, isParty: false, isWhite: false, voter_id: 1 }, // Ensure candidate_id 1 exists in Candidates
//           { Id: 2, candidate_id: 2, isLocal: false, isParty: true, isWhite: false, voter_id: 2 }  // Ensure candidate_id 2 exists in Candidates
//           // Add other rows as needed
//         ]);
//       });
//   };
  


exports.seed = function(knex) {
  return knex('Votes').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Votes').insert([
        { Id: 1, candidate_id: 1, isLocal: true, isParty: false, isWhite: false, voter_id: 1 },
        { Id: 2, candidate_id: 2, isLocal: false, isParty: true, isWhite: false, voter_id: 2 },
        // Add more votes up to 20 records
      ]);
    });
};



