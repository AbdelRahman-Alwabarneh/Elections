// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// راوت لاسترجاع جميع المستخدمين
router.get('/users/:N_Id', userController.getUserByNId);

module.exports = router;
