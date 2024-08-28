const CircleModel = require("../models/resultsCircleModel");

class circleController {
  static async getAllCircles(req, res) {
      try {
        
      const lists = await CircleModel.getAll();
      res.status(200).json(lists);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }

  static async getVotesCount(req, res) {
    const { id } = req.params;
    try {
      const votes = await CircleModel.getVotes(id);
      if (votes) {
        res.status(200).json(votes);
      } else {
        res.status(404).json({ message: "circle not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  }

  static async gethTreshold(req, res) {
    const { id } = req.params;
    try {
      const votes = await CircleModel.getVotes(id); // Fetch the number of votes for the given id
      const threshold = votes.count * 0.07; // Calculate the threshold as 7% of the votes
      res.status(200).json({ threshold }); // Send the threshold value back as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  }
}

module.exports = circleController;
