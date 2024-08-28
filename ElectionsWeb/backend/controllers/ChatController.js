const knex = require("knex")(require("../knexfile").development);

// إضافة رسالة جديدة للمستخدم
exports.UserAddMessage = async (req, res) => {
  const { UserMessage } = req.body;
  
  // استخرج N_Id من الـ JWT الذي تم التحقق منه
  const N_Id = req.user.N_Id;

  try {
    await knex("ChatMessages").insert({
      CN_Id: N_Id, // استخدام N_Id من التوكن كـ CN_Id
      Message: UserMessage,
      admin: false,
      Deleted: false,
    });
    res.status(201).json({ message: "تمت إضافة رسالة بنجاح!" });
  } catch (error) {
    console.error("Error in UserAddMessage:", error.message);
    res.status(500).json({ error: "حدث خطأ أثناء إرسال الرسالة." });
  }
};

// جلب الرسائل المتعلقة بالمستخدم المحدد
exports.getMessages = async (req, res) => {
  // استخرج N_Id من الـ JWT الذي تم التحقق منه
  const N_Id = req.user.N_Id;

  try {
    const Messages = await knex("ChatMessages")
      .select("*")
      .where({
        CN_Id: N_Id,  // جلب الرسائل الخاصة بهذا المستخدم فقط
        Deleted: false,
      });
    res.status(200).json(Messages);
  } catch (error) {
    console.error("Error in getMessages:", error.message);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الرسائل." });
  }
};
