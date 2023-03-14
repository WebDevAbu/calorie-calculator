const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  date: {
    type: String,
    require: true,
  },
  t_intakecalorie: {
    type: Number,
    require: true,
  },
  intakecalorie: {
    type: Number,
    require: true,
  },
  t_burncalorie: {
    type: Number,
    require: true,
  },
  burncalorie: {
    type: Number,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "all_user",
  },
});

module.exports = mongoose.model("user_details", schema);

// module.exports = (sequelize, DataTypes) => {
//   const UserDetails = sequelize.define(
//     "user_details",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       t_intakecalorie: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       intakecalorie: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       t_burncalorie: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       burncalorie: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//     },
//     {
//       timestamps: false,
//     }
//   );
//   return UserDetails;
// };
