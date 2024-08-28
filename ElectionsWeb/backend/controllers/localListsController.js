// const knex = require('../knex_config');

// // Controller function to get local lists by circle_id
// exports.getAllLocalLists = async (req, res) => {
//   const { circle_id } = req.query; // Get circle_id from query parameters
//   console.log(circle_id);
  

//   try {
//     let query = knex('localList')
//       .select('localList.id', 'localList.name', 'localList.count')
//       .where('localList.circle_id', circle_id); // Filter by circle_id directly

//     const localLists = await query;

//     res.json(localLists);
//   } catch (error) {
//     console.error('Error fetching local lists:', error); // Log the error
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// };


//////////////////////////////////////////////



// const knex = require('../knex_config');

// // Controller function to get local lists by circle_id with their candidates
// exports.getAllLocalLists = async (req, res) => {
//   const { circle_id } = req.query;

//   try {
//     let localLists = await knex('localList')
//       .select('localList.id', 'localList.name')
//       .where('localList.circle_id', circle_id);

//     // Fetch candidates for each local list
//     for (let list of localLists) {
//       const candidates = await knex('LocalListsCandidates')
//         .select('candidate_name', 'N_Id')
//         .where('local_list_id', list.id);

//       list.candidates = candidates; // Attach candidates to the local list
//     }

//     res.json(localLists);
//   } catch (error) {
//     console.error('Error fetching local lists:', error);
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// };





////////////////////////////////////////////////////////

const knex = require("knex")(require("../knexfile").development);

// Controller function to get local lists by circle_id with their candidates
exports.getAllLocalLists = async (req, res) => {
  const { circle_id } = req.query;

  try {
    if (!circle_id) {
      return res.status(400).json({ message: 'circle_id is required' });
    }

    let localLists = await knex('localList')
      .select('localList.id', 'localList.name')
      .where('localList.circle_id', circle_id);

    // Fetch candidates for each local list
    for (let list of localLists) {
      const candidates = await knex('LocalListsCandidates')
        .select('candidate_name', 'N_Id')
        .where('local_list_id', list.id);

      list.candidates = candidates; // Attach candidates to the local list
    }

    res.json(localLists);
  } catch (error) {
    console.error('Error fetching local lists:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// Controller function to handle voting
exports.vote = async (req, res) => {
  const { listId, candidates } = req.body;

  try {
    if (!listId) {
      return res.status(400).json({ message: 'listId is required' });
    }

    // Increment numOfVotes for the selected list
    await knex('localList')
      .where('id', listId)
      .increment('numOfVotes', 1);

    // Increment numOfVotes for each selected candidate
    if (candidates && candidates.length > 0) {
      await knex('LocalListsCandidates')
        .whereIn('N_Id', candidates)
        .andWhere('local_list_id', listId)
        .increment('numOfVotes', 1);
    }

    res.status(200).json({ message: 'Vote recorded successfully' });
  } catch (error) {
    console.error('Error recording vote:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};




