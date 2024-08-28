const express = require('express');
const router = express.Router();
const localListsController = require('../controllers/localListsController');

// Route to get all local lists
router.get('/', localListsController.getAllLocalLists);

// Route to handle voting
router.post('/vote', localListsController.vote);

module.exports = router;
