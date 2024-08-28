const knex = require("knex")(require("../knexfile").development);

// voting percentage
exports.overview = async (req, res) => {
    try {
      // تعديل اسم العمود ليكون مطابقًا لاسم العمود في قاعدة البيانات
      const totalVotesResult = await knex("localList").sum(
        "numOfvotes as total"
      );
      const totalUsersResult = await knex("Users").count("N_Id as total");

      const totalVotes = totalVotesResult[0].total || 0;
      const totalUsers = totalUsersResult[0].total || 0;

      console.log("Total Votes:", totalVotes);
      console.log("Total Users:", totalUsers);

      if (totalUsers === 0) {
        return res.status(200).json({ votingPercentage: 0 });
      }

      const votingPercentage = (totalVotes / totalUsers) * 10;

      return res
        .status(200)
        .json({ votingPercentage: votingPercentage.toFixed(2) });
    } catch (error) {
      console.error("Error calculating voting percentage:", error);
      return res
        .status(500)
        .json({ message: "Error calculating voting percentage" });
    }
  }
