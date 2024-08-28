const knex = require("../config/db");

class PartyModel {
  static getAll() {
    return knex("partyList").select("*");
  }

  static getTotalVotes() {
    return knex("partyList").sum("numOfVotes as totalVotes").first();
  }
}

module.exports = PartyModel;
