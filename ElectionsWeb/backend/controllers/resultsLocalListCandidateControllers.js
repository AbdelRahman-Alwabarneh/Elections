const localListCandidatesModel = require("../models/resultsLocalListsCandidatesModel");

class localListCandidatesController {
  // Get all candidates
  static async getAllCandidates(req, res) {
    try {
      const candidates = await localListCandidatesModel.getAll();
      res.status(200).json(candidates);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }

  // Get candidates by list id
  static async getCandidatesByList(req, res) {
    const { list_id } = req.params;
    try {
      const candidate = await localListCandidatesModel.getCandidatesByListId(
        list_id
      );
      if (candidate.length > 0) {
        res.status(200).json(candidate);
      } else {
        res.status(404).json({ message: "Candidate not found" });
      }
    } catch {
      res.status(500).json({ message: "Server Error", error });
    }
  }

  // Get all user data for candidates by list id
  static async getUsersByListId(req, res) {
    try {
      const { list_id } = req.params;
      const users = await localListCandidatesModel.getUsersByListId(list_id);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = localListCandidatesController;
