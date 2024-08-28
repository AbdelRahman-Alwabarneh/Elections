const express = require("express");
const router = express.Router();
const LocalListController = require("../controllers/resultsLocalListController");

// Route to get all lists
router.get("/local-lists", LocalListController.getAllLists);

// Route to get local list by id
router.get("/local-list/:id", LocalListController.getLocalListById);

// Route to get local list by circle id
router.get(
  "/local-list/circle/:id",
  LocalListController.getLocalListByCircleId
);

// Rote to delete local list by id
router.delete("/local-list/:id", LocalListController.deleteLocalList);

// Route to update status
router.put("/local-list/status/:id", LocalListController.updateLocalListStatus);

// Route to get votes by list id => total votes
router.get("/local-list/votes/:id", LocalListController.getNumOfVotes);

// Route to get the sum of votes for a specific circle_id
router.get(
  "/circle/:circleId/votes",
  LocalListController.getSumVotesByCircleId
);

// Route to get the sum of votes for a specific circle_id
router.get("/circle/:id/threshold", LocalListController.getThreshold);

// Route to get all the list above threshold
router.get(
  "/lists/above-threshold/:circleId",
  LocalListController.getListsAboveThresholdByCircle
);

// Route to get the sum list above threshold
router.get(
  "/lists/sum-above-threshold/:circleId",
  LocalListController.getTotalSumOfVotesAboveThresholdByCircle
);

// Route to get the  seat Weight
router.get("/lists/seatWeight/:circleId", LocalListController.seatWeight);

// Route to get votes to seat weight ratio for a specific circle
router.get(
  "/local-list/ratio/:circleId",
  LocalListController.getVotesToSeatWeightRatio
);

module.exports = router;
