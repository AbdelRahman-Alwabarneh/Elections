const knex = require("../config/db");

class circleModel {
  //Get all Circles
  static getAll() {
    return knex("Circles").select("*");
  }

  static getVotes(circle_id) {
    return knex("Circles").select("count").where({ circle_id }).first();
  }
}

module.exports = circleModel;
