const knex = require("../config/db");

class LocalListCandidateModel {
  // Get all local list candidates
  static getAll() {
    return knex("LocalListsCandidates").select("*");
  }

  // Get local candidate by list id
  static getCandidatesByListId(local_list_id) {
    return knex("LocalListsCandidates").select("N_Id").where({ local_list_id });
  }

  // Get all user data for candidates by list id
  static getUsersByListId(local_list_id) {
    return knex("LocalListsCandidates")
      .join("Users", "LocalListsCandidates.N_Id", "=", "Users.N_Id")
      .select("Users.*")
      .where("LocalListsCandidates.local_list_id", local_list_id);
  }
}
module.exports = LocalListCandidateModel;
