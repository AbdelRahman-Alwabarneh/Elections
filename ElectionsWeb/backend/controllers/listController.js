const knex = require('../config/db');

exports.createList = async (req, res) => {
    const { N_Id, circle_id, name } = req.body;

    if (!name || !N_Id || !circle_id) {
        return res.status(400).json({ error: 'مفقود بيانات: name و N_Id و circle_id مطلوبين' });
    }

    try {
        // Check if N_Id exists in Users
        const userExists = await knex('Users').where('N_Id', N_Id).first();
        if (!userExists) {
            return res.status(400).json({ error: 'N_Id غير موجود في جدول Users' });
        }

        const [id] = await knex('localList').insert({ name, N_Id, circle_id }).returning('id');
        res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!', id });
    } catch (error) {
        console.error('Error while adding the list:', error.message);
        res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.' });
    }
};



exports.getLists = async (req, res) => {
    try {
        const lists = await knex('Lists').select('*');
        res.status(200).json(lists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'حدث خطأ أثناء جلب القوائم.' });
    }
};

exports.updateList = async (req, res) => {
    const { list_id, name, logo } = req.body;

    const missingFields = [];
    if (!list_id) missingFields.push('list_id');
    if (!name) missingFields.push('name');
    if (!logo) missingFields.push('logo');

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing fields: ${missingFields.join(', ')}` });
    }

    try {
        const result = await knex('Lists').where('list_id', list_id).update({ name, logo });
        if (result) {
            res.status(200).json({ message: 'List updated successfully!' });
        } else {
            res.status(404).json({ error: 'List not found' });
        }
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'An error occurred while updating the list.', details: error.message });
    }
};

exports.deleteList = async (req, res) => {
    const { list_id } = req.body;

    if (!list_id) {
        return res.status(400).json({ error: 'مفقود بيانات: list_id مطلوب' });
    }

    try {
        const result = await knex('Lists').where('list_id', list_id).del();
        if (result) {
            res.status(200).json({ message: 'تم حذف القائمة بنجاح!' });
        } else {
            res.status(404).json({ error: 'القائمة غير موجودة' });
        }
    } catch (error) {
        console.error('خطأ أثناء حذف القائمة:', error);
        res.status(500).json({ error: 'حدث خطأ أثناء حذف القائمة.' });
    }
};
