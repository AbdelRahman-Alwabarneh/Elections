const knex = require("../config/db");

class LocalListModel {
  // get all local list
  static getAll() {
    return knex("localList").select("*");
  }

  //Get list by id
  static getById(id) {
    return knex("localList").select("*").where({ id }).first();
  }

  //Get local list by circle id
  static getByCircle(circle_id) {
    return knex("localList").select("*").where({ circle_id });
  }

  // Delete list by id
  static deleteById(id) {
    return knex("localList").where({ id }).del();
  }

  //Update status
  static async updateStatus(id, status) {
    return knex("localList").where({ id }).update({ status }).returning("*"); // Return the updated row
  }

  // // Get num of votes by list id
  static getVotes(id) {
    return knex("localList").select("numOfvotes").where({ id }).first();
  }

  // مجموع كل الاصوات للقوائم في دائرة واحدة
  static async sumVotesByCircleId(circleId) {
    return knex("localList")
      .where("circle_id", circleId)
      .sum("numOfvotes as totalVotes")
      .first();
  }

  // lists above threshold by for each circle
  static async getListsAboveThresholdByCircle(circleId) {
    const tableName = "localList"; // Directly specify the table name

    try {
      const result = await knex.raw(
        `
        WITH circle_votes AS (
          SELECT SUM("numOfvotes") as total_votes
          FROM "${tableName}"
          WHERE "circle_id" = ?
        ),
        threshold AS (
          SELECT total_votes * 0.07 as threshold_value
          FROM circle_votes
        )
        SELECT l.*
        FROM "${tableName}" l, threshold
        WHERE l."circle_id" = ? AND l."numOfvotes" > threshold.threshold_value
      `,
        [circleId, circleId]
      );

      return result.rows;
    } catch (error) {
      console.error("Database query error:", error);
      throw error;
    }
  }

  static async getTotalSumOfVotesAboveThresholdByCircle(circleId) {
    const tableName = "localList"; // Directly specify the table name

    try {
      const result = await knex.raw(
        `
      WITH circle_votes AS (
        SELECT SUM("numOfvotes") as total_votes
        FROM "${tableName}"
        WHERE "circle_id" = ?
      ),
      threshold AS (
        SELECT total_votes * 0.07 as threshold_value
        FROM circle_votes
      ),
      filtered_lists AS (
        SELECT l.*
        FROM "${tableName}" l, threshold
        WHERE l."circle_id" = ? AND l."numOfvotes" > threshold.threshold_value
      )
      SELECT fl.*, SUM(fl."numOfvotes") OVER () as total_sum_of_votes
      FROM filtered_lists fl
    `,
        [circleId, circleId]
      );

      return result.rows[0].total_sum_of_votes;
    } catch (error) {
      console.error("Database query error:", error);
      throw error;
    }
  }

  static async seatWeight(circleId) {
    const tableName = "localList"; // Directly specify the table name

    try {
      const result = await knex.raw(
        `
            WITH circle_votes AS (
                SELECT SUM("numOfvotes") as total_votes
                FROM "${tableName}"
                WHERE "circle_id" = ?
            ),
            threshold AS (
                SELECT total_votes * 0.07 as threshold_value
                FROM circle_votes
            ),
            filtered_lists AS (
                SELECT l.*
                FROM "${tableName}" l, threshold
                WHERE l."circle_id" = ? AND l."numOfvotes" > threshold.threshold_value
            ),
            circle_info AS (
                SELECT c."numOfCandidat"
                FROM "Circles" c
                WHERE c."circle_id" = ?
            )
            SELECT COALESCE(SUM(fl."numOfvotes") OVER (), 0) / COALESCE(c."numOfCandidat", 1) as total_sum_of_votes
            FROM filtered_lists fl
            CROSS JOIN circle_info c
            `,
        [circleId, circleId, circleId]
      );

      return result.rows[0].total_sum_of_votes;
    } catch (error) {
      console.error("Database query error:", error);
      throw error;
    }
  }

  static async calculateVotesToSeatWeightRatio(circleId) {
    const tableName = "localList"; // Directly specify the table name

    try {
      const result = await knex.raw(
        `
        WITH circle_votes AS (
            SELECT SUM("numOfvotes") as total_votes
            FROM "${tableName}"
            WHERE "circle_id" = ?
        ),
        threshold AS (
            SELECT total_votes * 0.07 as threshold_value
            FROM circle_votes
        ),
        seat_weight AS (
            SELECT COALESCE(SUM("numOfvotes") OVER (), 0) / 
              COALESCE((SELECT "numOfCandidat" FROM "Circles" WHERE "circle_id" = ?), 1) as seat_weight
            FROM "${tableName}"
            WHERE "circle_id" = ? AND "numOfvotes" > (SELECT threshold_value FROM threshold)
        )
        SELECT DISTINCT l.id, l.name, l."numOfvotes", sw.seat_weight, 
              l."numOfvotes" / sw.seat_weight as final_seats_number
        FROM "${tableName}" l
        CROSS JOIN seat_weight sw
        WHERE l."circle_id" = ? AND l."numOfvotes" > (SELECT threshold_value FROM threshold)
        `,
        [circleId, circleId, circleId, circleId]
      );

      return result.rows;
    } catch (error) {
      console.error("Database query error:", error);
      throw error;
    }
  }
}

module.exports = LocalListModel;
