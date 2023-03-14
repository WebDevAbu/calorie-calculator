const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  activity: {
    type: String,
    require: true,
  },
  calories: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("exercise", schema);

// module.exports = (sequelize, DataTypes) => {
//   const Exercise = sequelize.define(
//     "exercise",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       activity: {
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
//   return Exercise;
// };
