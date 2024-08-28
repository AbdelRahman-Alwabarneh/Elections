const knex = require("knex")(require("../knexfile").development);

// Controller function to get all party lists
exports.getAllPartyLists = async (req, res) => {
  try {
    const partyLists = await knex('partyList').select('*'); // Adjust table name and columns as needed
    res.json(partyLists);
  } catch (error) {
    console.error('Error fetching party lists:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller function to handle voting for a party
exports.voteForParty = async (req, res) => {
  const { partyId } = req.body;

  if (!partyId) {
    return res.status(400).json({ message: 'Party ID is required' });
  }

  try {
    // Increment the numOfVotes for the selected party
    await knex('partyList')
      .where('party_id', partyId)
      .increment('numOfVotes', 1);

    res.json({ message: 'Vote recorded successfully' });
  } catch (error) {
    console.error('Error recording vote:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
