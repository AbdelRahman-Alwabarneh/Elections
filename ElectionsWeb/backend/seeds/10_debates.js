// exports.seed = function(knex) {
//     return knex('Debates').del()  // Optional: clear the table before seeding
//       .then(function () {
//         return knex('Debates').insert([
//           { id: 1, candidate_ids: [1, 2], date: '2024-09-01', description: 'Debate between candidates 1 and 2', title: 'Debate 1' },
//           { id: 2, candidate_ids: [2, 3], date: '2024-09-15', description: 'Debate between candidates 2 and 3', title: 'Debate 2' }
//         ]);
//       });
//   };
  

exports.seed = function(knex) {
  return knex('Debates').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Debates').insert([
        { id: 1, candidate_ids: [1, 2], date: '2024-09-01', description: 'مناظرة بين المرشحين 1 و 2', title: 'المناظرة 1' },
        { id: 2, candidate_ids: [2, 3], date: '2024-09-15', description: 'مناظرة بين المرشحين 2 و 3', title: 'المناظرة 2' }
        // Add more debates up to 20 records
      ]);
    });
};


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


exports.seed = function(knex) {
  return knex('Voters').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Voters').insert([
        { N_Id: 1 },
        { N_Id: 2 },
        // Add more voters up to 20 records
      ]);
    });
};


exports.seed = function(knex) {
  return knex('Candidates').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Candidates').insert([
        { Circle: 1, Election_id: 1, ListId: 1, N_Id: 1 },
        { Circle: 2, Election_id: 1, ListId: 2, N_Id: 2 },
        // Add more candidates up to 20 records
      ]);
    });
};


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


exports.seed = function(knex) {
  return knex('ElectionType').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('ElectionType').insert([
        { id: 1, Election_type: 'الانتخابات النيابية' },
        { id: 2, Election_type: 'الانتخابات البلدية' }
        // Add more records if needed
      ]);
    });
};

exports.seed = function(knex) {
  return knex('Users').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Users').insert([
        { N_Id: 1, age: 30, circle_id: 1, city: 'عمان', email: 'user1@example.com', gender: 'ذكر', isOrganizer: false, name: 'أحمد الحسين', otp: '1234', password: 'password1', polling_address: 'شارع الملك حسين', religion: 'مسلم', token: 'token1' },
        { N_Id: 2, age: 25, circle_id: 2, city: 'إربد', email: 'user2@example.com', gender: 'أنثى', isOrganizer: true, name: 'سارة العلي', otp: '5678', password: 'password2', polling_address: 'شارع الحسن', religion: 'مسيحي', token: 'token2' },
        // Add more users up to 20 records
      ]);
    });
};


exports.seed = function(knex) {
  return knex('Circles').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Circles').insert([
        { circle_id: 1, city: 'عمان', count: 15, name: 'الدائرة الأولى', numOfCandidat: 8 },
        { circle_id: 2, city: 'إربد', count: 12, name: 'الدائرة الثانية', numOfCandidat: 10 },
        { circle_id: 3, city: 'الزرقاء', count: 18, name: 'الدائرة الثالثة', numOfCandidat: 6 }
      ]);
    });
  }
