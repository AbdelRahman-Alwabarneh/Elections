const express = require('express');
const router = express.Router();
const partyListController = require('../controllers/partyListController');
console.log()
router.post('/party', partyListController.createList2);


module.exports = router;