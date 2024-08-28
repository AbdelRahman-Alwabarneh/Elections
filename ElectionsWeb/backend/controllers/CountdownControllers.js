const knex = require('../config/db');


exports.getCountdown = async (req, res) => {
    try {
      const countdown = await knex("countdown_timer")
        .orderBy("created_at", "desc")
        .first();
      res.json(countdown);
    } catch (error) {
      console.error("Error fetching countdown:", error);
      res.status(500).send("Error fetching countdown");
    }
  };
  