const knex = require("knex")(require("../knexfile").development);

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await knex('Users').select('N_Id', 'name');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUsers
};
