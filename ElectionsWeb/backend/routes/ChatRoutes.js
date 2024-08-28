const express = require('express');
const router = express.Router();
const Chat_Controller = require('../controllers/ChatController');
const { verifyToken } = require('../middlewares/auth');

router.post('/chatuser',verifyToken,Chat_Controller.UserAddMessage);
router.get('/getmessages', verifyToken,Chat_Controller.getMessages);
module.exports = router;