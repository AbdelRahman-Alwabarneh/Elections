const knex = require('../config/db');

exports.createList2 = async (req, res) => {
    const { name, organizer, logo } = req.body;

    if (!name || !organizer || !logo) {
        return res.status(400).json({ error: 'مفقود بيانات: name و organizer و logo مطلوبين.' });
    }

    try {
        const authorizedPerson = await knex('authorizedPersons')
            .where({ auth: organizer })
            .first();

        if (!authorizedPerson) {
            return res.status(403).json({ error: 'ليس لديك صلاحية لإضافة قائمة.' });
        }

        const [party_id] = await knex('partyList').insert({ name, organizer, logo }).returning('party_id');
        res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!', party_id });
    } catch (error) {
        console.error('خطأ أثناء إضافة القائمة:', error); // تسجيل الخطأ بشكل مفصل
        res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.', details: error.message });
    }
};
