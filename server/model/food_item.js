const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  item: {
    type: String,
    require: true,
  },
  calories: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("food_item", schema);

// module.exports = (sequelize, DataTypes) => {
//   const FoodItem = sequelize.define(
//     "food_item",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       item: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       calories: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//     },
//     {
//       timestamps: false,
//     }
//   );
//   return FoodItem;
// };
