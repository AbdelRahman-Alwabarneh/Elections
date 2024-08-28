require('dotenv').config();


// // Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };



module.exports = {
    development: {
      client: 'pg', // تحديد محرك قاعدة البيانات
      connection: {
        host: '127.0.0.1', // عنوان الخادم
        user: 'postgres', // اسم المستخدم في قاعدة البيانات
        password: process.env.DB_PASSWORD, // كلمة مرور قاعدة البيانات
        database: 'Elections' // اسم قاعدة البيانات
      },
      migrations: {
        directory: './migrations' // تحديد مكان تخزين ملفات المهاجرات
      },
      seeds: {
        directory: './seeds' // تحديد مكان تخزين ملفات البذور (اختياري)
      }
    }
  };

 