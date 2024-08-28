// exports.seed = function(knex) {
//     return knex('LocalCandidatesRequest').del()
//       .then(function () {
//         return knex('LocalCandidatesRequest').insert([
//           { Birth_Date: '1980-01-01', Circle_ID: 1, Email: 'candidate1@example.com', Gender: 'M', List_Name: 'List A', Name: 'John Doe', National_ID: '1234567890', Religion: 'None', Status: 'Pending', Type_Of_Chair: 'Type X' },
//           { Birth_Date: '1990-02-02', Circle_ID: 2, Email: 'candidate2@example.com', Gender: 'F', List_Name: 'List B', Name: 'Jane Smith', National_ID: '0987654321', Religion: 'Christian', Status: 'Approved', Type_Of_Chair: 'Type Y' }
//         ]);
//       });
//   };
  


exports.seed = function(knex) {
  return knex('LocalCandidatesRequest').del()
    .then(function () {
      return knex('LocalCandidatesRequest').insert([
        { Birth_Date: '1980-01-01', Circle_ID: 1, Email: 'candidate1@example.com', Gender: 'M', List_Name: 'قائمة أ', Name: 'علي أحمد', National_ID: '1234567890', Religion: 'مسلم', Status: 'معلق', Type_Of_Chair: 'نوع X' },
        { Birth_Date: '1990-02-02', Circle_ID: 2, Email: 'candidate2@example.com', Gender: 'F', List_Name: 'قائمة ب', Name: 'فاطمة الزهراء', National_ID: '0987654321', Religion: 'مسيحي', Status: 'موافق', Type_Of_Chair: 'نوع Y' }
        // Add more local candidates requests up to 20 records
      ]);
    });
};




