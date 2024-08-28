const express = require("express");
const router = express.Router();
const LocalListCandidatesController = require("../controllers/resultsLocalListCandidateControllers");

// Route to get all candidates
router.get("/local-candidates", LocalListCandidatesController.getAllCandidates);

// Route to get id candidates by list_id
router.get(
  "/local-candidate/:list_id",
  LocalListCandidatesController.getCandidatesByList
);

// Route to get users by list_id
router.get(
  "/local-candidate-info/:list_id",
  LocalListCandidatesController.getUsersByListId
);
module.exports = router;
