const express = require('express');
const router = express.Router();
const partyListsController = require('../controllers/partyListsController');

// Route to get all party lists
router.get('/', partyListsController.getAllPartyLists);

// Route to vote for a party
router.post('/vote', partyListsController.voteForParty);

module.exports = router;
