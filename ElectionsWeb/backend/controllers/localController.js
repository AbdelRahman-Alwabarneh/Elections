

const knex = require('../config/db');

exports.createList = async (req, res) => {
    const { name, circle_id } = req.body;

    // التحقق من وجود البيانات المطلوبة
    if (!name || !circle_id) {
        return res.status(400).json({ error: 'مفقود بيانات: name و circle_id مطلوبين' });
    }

    try {
        // إدراج البيانات في جدول localList
        const [list_id] = await knex('localList').insert({
            name,
            circle_id
        }).returning('id');
        
        res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!', list_id });
    } catch (error) {
        console.error('خطأ أثناء إضافة القائمة:', error);
        res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.' });
    }
};

