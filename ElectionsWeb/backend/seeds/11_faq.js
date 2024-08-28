// exports.seed = function(knex) {
//     return knex('Faq').del()  // Optional: clear the table before seeding
//       .then(function () {
//         return knex('Faq').insert([
//           { id: 1, question: 'What is the purpose of the election?', answer: 'To elect candidates to office.' },
//           { id: 2, question: 'How can I register to vote?', answer: 'You can register online or at your local election office.' }
//         ]);
//       });
//   };
  


exports.seed = function(knex) {
  return knex('Faq').del()  // Optional: clear the table before seeding
    .then(function () {
      return knex('Faq').insert([
        { id: 1, question: 'ما هو هدف الانتخابات؟', answer: 'لانتخاب مرشحين للمناصب.' },
        { id: 2, question: 'كيف يمكنني التسجيل للتصويت؟', answer: 'يمكنك التسجيل عبر الإنترنت أو في مكتب الانتخابات المحلي.' }
        // Add more FAQs up to 20 records
      ]);
    });
};


