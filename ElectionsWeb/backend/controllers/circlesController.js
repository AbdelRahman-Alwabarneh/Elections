const knex = require("knex")(require("../knexfile").development);

exports.getAllCircles = async (req, res) => {
  try {
    console.log('Fetching circles from database...'); // Debug log
    const circles = await knex('Circles').select('*');
    console.log('Circles fetched:', circles); // Debug log
    res.json(circles);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Failed to fetch circles data' });
  }
};
