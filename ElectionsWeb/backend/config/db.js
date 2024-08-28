// // db.js
// const knex = require('knex');
// const express = require('express');

// const knexfile = require('../knexfile');
// const db = knex(knexfile.development);
// const app = express();

// app.use(express.json());

// // وظيفة للتحقق من الاتصال بقاعدة البيانات
// const testConnection = async () => {
//     try {
//         await db.raw('SELECT 1');
//         console.log('تم الاتصال بقاعدة البيانات بنجاح!');
//     } catch (error) {
//         console.error('فشل الاتصال بقاعدة البيانات:', error);
//     }
// };

// // استدعاء اختبار الاتصال
// // testConnection();

// module.exports = db;
// db/knex.js
const knex = require('knex');
const knexConfig = require('../knexfile'); // تأكد من صحة المسار إلى ملف إعداد Knex

const db = knex(knexConfig.development); // أو production حسب البيئة التي تستخدمها

module.exports = db;
