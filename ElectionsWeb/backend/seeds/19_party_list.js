
// // seeds/19_party_list.js
// exports.seed = function(knex) {
//     return knex('partyList').insert([
//       {
//         party_id: 1,
//         name: 'Party A',
//         logo: 'party_a_logo.png',
//         count: 0,
//         organizer: 'John Doe',
//         numOfVotes: 0,
//       },
//       {
//         party_id: 2,
//         name: 'Party B',
//         logo: 'party_b_logo.png',
//         count: 0,
//         organizer: 'Jane Smith',
//         numOfVotes: 0,
//       },
//       // Add more party list data here
//     ]);
//   };


exports.seed = function(knex) {
  return knex('partyList').del()
    .then(function () {
      return knex('partyList').insert([
        {
          party_id: 1,
          name: 'حزب أ',
          logo: 'party_a_logo.png',
          count: 0,
          organizer: 'جود الحسن',
          numOfVotes: 0,
        },
        {
          party_id: 2,
          name: 'حزب ب',
          logo: 'party_b_logo.png',
          count: 0,
          organizer: 'ريم السعيد',
          numOfVotes: 0,
        }
        // Add more party lists up to 20 records
      ]);
    });
};



