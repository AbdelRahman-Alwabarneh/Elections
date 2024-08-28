const knex = require("knex")(require("../knexfile").development);

exports.AddAds = async (req, res) => {
  console.log("inside ads");
  const {
    request_type,
    title,
    image,
    description,
    plan,
    candidate_one_id,
    candidate_two_id,
  } = req.body;
  
  console.log(image);
  try {
    await knex("Ads").insert({
      request_type: request_type,
      title: title,
      image_url: image,
      description: description,
      ad_plan: plan,
      candidate_one_id: candidate_one_id,
      candidate_two_id: candidate_two_id,
    });
    res.status(201).json({ message: "تمت إضافة المنتج بنجاح!" });
  } catch (error) {
    res.status(500).json({ error: "حدث خطأ أثناء إضافة المنتج." });
  }
};

exports.getAds = async (req, res) => {
  try {
    const Messages = await knex("Ads").select("*").where({
      request_type: true,
      acceptable: true,
    });
    res.status(200).json(Messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الرسائل." });
  }
};

exports.getInvoice = async (req, res) => {
  try {
    const Messages = await knex("Ads").select("*").where({
      request_type: true,
      acceptable: true,
    });
    res.status(200).json(Messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الرسائل." });
  }
};
