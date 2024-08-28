// controllers/userController.js
const knex = require('../config/db');

exports.getUserByNId = async (req, res) => {
    const { N_Id } = req.params;

    if (!N_Id) {
        return res.status(400).json({ error: 'يرجى إدخال N_Id صالح.' });
    }

    try {
        const user = await knex('Users').where({ N_Id }).first();

        if (!user) {
            return res.status(404).json({ error: 'المستخدم غير موجود.' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('خطأ أثناء جلب المستخدم:', error);
        res.status(500).json({ error: 'حدث خطأ أثناء جلب المستخدم من قاعدة البيانات.' });
    }
};
