const FoodItem = require("../model/food_item");

exports.addItem = async (req, res) => {
  console.log("hello world---------");
  try {
    const data = new FoodItem(req.body);
    const foodItem = await data.save();
    console.log(foodItem);
    return res.status(200).send(foodItem);
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.getItem = async (req, res) => {
  try {
    const data = await FoodItem.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(data);
  }
};
