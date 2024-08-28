const express = require('express');
const router = express.Router();
const Chat_Controller = require('../controllers/ChatController');
const { verifyToken } = require('../middlewares/auth');

router.get('/', verifyToken, (req, res) => {
    res.json({ message: 'أهلاً بك في المسار المحمي', user: req.user });
  });
module.exports = router;