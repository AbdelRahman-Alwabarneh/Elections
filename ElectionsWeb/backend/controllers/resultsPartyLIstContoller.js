const PartyModel = require("../models/resultsPartyList");

class PartyController {
  static async getAllParties(req, res) {
    try {
      const party = await PartyModel.getAll();
      res.status(200).json(party);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }

  static async getElectoralThreshold(req, res) {
    try {
      const electoralThresholdPercentage = 0.025;
      const totalVotesData = await PartyModel.getTotalVotes();
      const totalVotes = totalVotesData.totalVotes;
      const electoralThresholdVotes = totalVotes * electoralThresholdPercentage;
      const parties = await PartyModel.getAll();
      const partiesPassingThreshold = parties.filter((party) => {
        return party.numOfVotes >= electoralThresholdVotes;
      });
      res.status(200).json({
        totalVotes,
        thresholdPercentage: electoralThresholdPercentage,
        thresholdVotes: electoralThresholdVotes,
        partiesPassingThreshold,
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  }
}

module.exports = PartyController;
