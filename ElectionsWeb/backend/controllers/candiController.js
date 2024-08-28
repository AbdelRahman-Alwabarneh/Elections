const knex = require('../config/db');

exports.createCandidate = async (req, res) => {
    console.log('Received request to create candidate:', req.body);

    const { N_Id, candidate_name, local_list_id, circle_id } = req.body;

    if (!N_Id || !candidate_name ||  !local_list_id || !circle_id) {
        console.error('Missing required fields');
        return res.status(400).json({ error: 'مفقود بيانات: N_Id و candidate_name و local_list_id و circle_id مطلوبين' });
    }

    const trx = await knex.transaction();
    try {
        await trx('LocalListsCandidates').insert({ 
            N_Id,
            candidate_name,
            local_list_id,
            circle_id
        });

        await trx.commit();
        console.log('Candidate added successfully');
        res.status(201).json({ message: 'تمت إضافة المرشح وربطه بالقائمة بنجاح!' });
    } catch (error) {
        await trx.rollback();
        console.error('Error adding candidate:', error); 
        res.status(500).json({ error:` حدث خطأ أثناء إضافة المرشح: ${error.message}` });
    }
};