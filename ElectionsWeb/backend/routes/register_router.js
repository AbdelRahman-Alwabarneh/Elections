

const express = require("express");
const router = express.Router();
const controller = require("../controllers/register_controller");


router.post("/sign_up",controller.sign_up);
router.post("/log-in",controller.log_in);
router.post("/log-in-new",controller.log_in_new);
router.post("/new-pass",controller.set_new_pass);
router.get("/user",controller.get_data);

router.post("/contact-message",controller.contact_message);


module.exports = router;