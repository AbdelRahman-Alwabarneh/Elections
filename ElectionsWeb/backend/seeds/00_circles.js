// exports.seed = function(knex) {
//   return knex('Circles').del()  // Optional: clear the table before seeding
//     .then(function () {
//       return knex('Circles').insert([
//         { circle_id: 1, city: 'City A', count: 10, name: 'Circle A', numOfCandidat: 5 },
//         { circle_id: 2, city: 'City B', count: 20, name: 'Circle B', numOfCandidat: 7 },
//         { circle_id: 3, city: 'City C', count: 15, name: 'Circle C', numOfCandidat: 6 }
//       ]);
//     });
// };



exports.seed = function(knex) {
  return knex('Circles').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Circles').insert([
        { circle_id: 1, city: 'عمان', count: 15, name: 'الدائرة الأولى', numOfCandidat: 8 },
        { circle_id: 2, city: 'إربد', count: 12, name: 'الدائرة الثانية', numOfCandidat: 10 },
        { circle_id: 3, city: 'الزرقاء', count: 18, name: 'الدائرة الثالثة', numOfCandidat: 6 }
      ]);
    });
};
