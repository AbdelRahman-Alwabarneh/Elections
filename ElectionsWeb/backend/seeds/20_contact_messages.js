// // seeds/20_contact_messages.js
// exports.seed = function(knex) {
//     return knex('contactMessages').insert([
//       {
//         mid: 1,
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         message: 'I have a question about the application process.',
//       },
//       {
//         mid: 2,
//         name: 'Jane Smith',
//         email: 'jane.smith@example.com',
//         message: 'I would like to provide feedback on the website.',
//       },
//       // Add more contact message data here
//     ]);
//   };


exports.seed = function(knex) {
  return knex('contactMessages').del()
    .then(function () {
      return knex('contactMessages').insert([
        {
          mid: 1,
          name: 'جود الحسن',
          email: 'jood@example.com',
          message: 'لدي سؤال حول عملية التقديم.',
        },
        {
          mid: 2,
          name: 'ريم السعيد',
          email: 'reem@example.com',
          message: 'أود تقديم ملاحظات حول الموقع.',
        }
        // Add more contact messages up to 20 records
      ]);
    });
};







// exports.seed = function(knex) {
//   return knex('contactMessages').del()
//     .then(function () {
//       return knex('contactMessages').insert([
//         {
//           mid: 1,
//           name: 'جود الحسن',
//           email: 'jood@example.com',
//           message: 'لدي سؤال حول عملية التقديم.',
//         },
//         {
//           mid: 2,
//           name: 'ريم السعيد',
//           email: 'reem@example.com',
//           message: 'أود تقديم ملاحظات حول الموقع.',
//         }
//         // Add more contact messages up to 20 records
//       ]);
//     });
// };



// xports.seed = function(knex) {
//   return knex('partyList').del()
//     .then(function () {
//       return knex('partyList').insert([
//         {
//           party_id: 1,
//           name: 'حزب أ',
//           logo: 'party_a_logo.png',
//           count: 0,
//           organizer: 'جود الحسن',
//           numOfVotes: 0,
//         },
//         {
//           party_id: 2,
//           name: 'حزب ب',
//           logo: 'party_b_logo.png',
//           count: 0,
//           organizer: 'ريم السعيد',
//           numOfVotes: 0,
//         }
//         // Add more party lists up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('LocalListsCandidates').del()
//     .then(function () {
//       return knex('LocalListsCandidates').insert([
//         { N_Id: 1, candidate_name: 'مرشح أ', circle_id: 1, created_at: new Date(), id: 1, local_list_id: 1, numOfVotes: 0, updated_at: new Date() },
//         { N_Id: 2, candidate_name: 'مرشح ب', circle_id: 1, created_at: new Date(), id: 2, local_list_id: 2, numOfVotes: 0, updated_at: new Date() }
//         // Add more local list candidates up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('localList').del() // Clear the table first
//     .then(function () {
//       return knex('localList').insert([
//         {
//           id: 1,
//           N_Id: 1, // Ensure this value exists in the referenced table
//           circle_id: 1,
//           name: 'قائمة محلية 1',
//           numOfVotes: 100,
//           status: 'نشط'
//         },
//         {
//           id: 2,
//           N_Id: 2, // Ensure this value exists in the referenced table
//           circle_id: 2,
//           name: 'قائمة محلية 2',
//           numOfVotes: 150,
//           status: 'غير نشط'
//         }
//         // Add more local lists up to 20 records
//       ]);
//     });
// };



// exports.seed = function(knex) {
//   return knex('ChatMessages').del()
//     .then(function () {
//       return knex('ChatMessages').insert([
//         { CN_Id: 1, Deleted: false, M_Id: 1, Message: 'مرحبا!', admin: true, timestamp: new Date() },
//         { CN_Id: 2, Deleted: false, M_Id: 2, Message: 'مرحبا بك!', admin: false, timestamp: new Date() }
//         // Add more chat messages up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('authorizedPersons').del()
//     .then(function () {
//       return knex('authorizedPersons').insert([
//         { auth: 'مصادقة1', auth_id: 1, created_at: new Date(), updated_at: new Date() },
//         { auth: 'مصادقة2', auth_id: 2, created_at: new Date(), updated_at: new Date() }
//         // Add more authorized persons up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('LocalCandidatesRequest').del()
//     .then(function () {
//       return knex('LocalCandidatesRequest').insert([
//         { Birth_Date: '1980-01-01', Circle_ID: 1, Email: 'candidate1@example.com', Gender: 'M', List_Name: 'قائمة أ', Name: 'علي أحمد', National_ID: '1234567890', Religion: 'مسلم', Status: 'معلق', Type_Of_Chair: 'نوع X' },
//         { Birth_Date: '1990-02-02', Circle_ID: 2, Email: 'candidate2@example.com', Gender: 'F', List_Name: 'قائمة ب', Name: 'فاطمة الزهراء', National_ID: '0987654321', Religion: 'مسيحي', Status: 'موافق', Type_Of_Chair: 'نوع Y' }
//         // Add more local candidates requests up to 20 records
//       ]);
//     });
// };



// exports.seed = function(knex) {
//   return knex('partyrequest').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('partyrequest').insert([
//         { id: 1, created_at: new Date(), updated_at: new Date(), delegate_name: 'جود الحسن', delegate_email: 'jood@example.com', delegate_phone: '1234567890', email: 'joodhassan@example.com', name: 'حزب أ', phone: '0987654321', list_name: 'قائمة أ', reason: 'سبب أ', status: 'معلق' },
//         { id: 2, created_at: new Date(), updated_at: new Date(), delegate_name: 'ريم السعيد', delegate_email: 'reem@example.com', delegate_phone: '2345678901', email: 'reemsaeed@example.com', name: 'حزب ب', phone: '8765432109', list_name: 'قائمة ب', reason: 'سبب ب', status: 'موافق' }
//         // Add more party requests up to 20 records
//       ]);
//     });
// };



// exports.seed = function(knex) {
//   return knex('Faq').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Faq').insert([
//         { id: 1, question: 'ما هو هدف الانتخابات؟', answer: 'لانتخاب مرشحين للمناصب.' },
//         { id: 2, question: 'كيف يمكنني التسجيل للتصويت؟', answer: 'يمكنك التسجيل عبر الإنترنت أو في مكتب الانتخابات المحلي.' }
//         // Add more FAQs up to 20 records
//       ]);
//     });
// };

// exports.seed = function(knex) {
//   return knex('Debates').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Debates').insert([
//         { id: 1, candidate_ids: [1, 2], date: '2024-09-01', description: 'مناظرة بين المرشحين 1 و 2', title: 'المناظرة 1' },
//         { id: 2, candidate_ids: [2, 3], date: '2024-09-15', description: 'مناظرة بين المرشحين 2 و 3', title: 'المناظرة 2' }
//         // Add more debates up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('Admin').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Admin').insert([
//         { Admin_Id: 1, email: 'admin1@example.com', name: 'إداري واحد', password: 'password1', role: 'superadmin' },
//         { Admin_Id: 2, email: 'admin2@example.com', name: 'إداري اثنان', password: 'password2', role: 'admin' }
//         // Add more admins up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('Votes').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Votes').insert([
//         { Id: 1, candidate_id: 1, isLocal: true, isParty: false, isWhite: false, voter_id: 1 },
//         { Id: 2, candidate_id: 2, isLocal: false, isParty: true, isWhite: false, voter_id: 2 },
//         // Add more votes up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('Voters').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Voters').insert([
//         { N_Id: 1 },
//         { N_Id: 2 },
//         // Add more voters up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('Candidates').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Candidates').insert([
//         { Circle: 1, Election_id: 1, ListId: 1, N_Id: 1 },
//         { Circle: 2, Election_id: 1, ListId: 2, N_Id: 2 },
//         // Add more candidates up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('Lists').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Lists').insert([
//         { list_id: 1, candidate: 1, circle: 1, file_path: 'path1', logo: 'logo1', name: 'قائمة 1', org: 'منظمة 1' },
//         { list_id: 2, candidate: 2, circle: 2, file_path: 'path2', logo: 'logo2', name: 'قائمة 2', org: 'منظمة 2' },
//         // Add more lists up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('ElectionType').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('ElectionType').insert([
//         { id: 1, Election_type: 'الانتخابات النيابية' },
//         { id: 2, Election_type: 'الانتخابات البلدية' }
//         // Add more records if needed
//       ]);
//     });
// };

// exports.seed = function(knex) {
//   return knex('Users').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Users').insert([
//         { N_Id: 1, age: 30, circle_id: 1, city: 'عمان', email: 'user1@example.com', gender: 'ذكر', isOrganizer: false, name: 'أحمد الحسين', otp: '1234', password: 'password1', polling_address: 'شارع الملك حسين', religion: 'مسلم', token: 'token1' },
//         { N_Id: 2, age: 25, circle_id: 2, city: 'إربد', email: 'user2@example.com', gender: 'أنثى', isOrganizer: true, name: 'سارة العلي', otp: '5678', password: 'password2', polling_address: 'شارع الحسن', religion: 'مسيحي', token: 'token2' },
//         // Add more users up to 20 records
//       ]);
//     });
// };


// exports.seed = function(knex) {
//   return knex('Circles').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Circles').insert([
//         { circle_id: 1, city: 'عمان', count: 15, name: 'الدائرة الأولى', numOfCandidat: 8 },
//         { circle_id: 2, city: 'إربد', count: 12, name: 'الدائرة الثانية', numOfCandidat: 10 },
//         { circle_id: 3, city: 'الزرقاء', count: 18, name: 'الدائرة الثالثة', numOfCandidat: 6 }
//       ]);
//     });
//   };
