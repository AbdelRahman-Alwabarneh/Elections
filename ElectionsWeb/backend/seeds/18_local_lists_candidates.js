// exports.seed = function(knex) {
//     return knex('LocalListsCandidates').insert([
//       { N_Id: 1, candidate_name: 'Candidate A', circle_id: 1, created_at: new Date(), id: 1, local_list_id: 1, numOfVotes: 0, updated_at: new Date() },
//       { N_Id: 2, candidate_name: 'Candidate B', circle_id: 1, created_at: new Date(), id: 2, local_list_id: 2, numOfVotes: 0, updated_at: new Date() },
//       // Ensure N_Id values (1, 2) exist in the referenced table
//     ]);
//   };
  

exports.seed = function(knex) {
  return knex('LocalListsCandidates').del()
    .then(function () {
      return knex('LocalListsCandidates').insert([
        { N_Id: 1, candidate_name: 'مرشح أ', circle_id: 1, created_at: new Date(), id: 1, local_list_id: 1, numOfVotes: 0, updated_at: new Date() },
        { N_Id: 2, candidate_name: 'مرشح ب', circle_id: 1, created_at: new Date(), id: 2, local_list_id: 2, numOfVotes: 0, updated_at: new Date() }
        // Add more local list candidates up to 20 records
      ]);
    });
};



