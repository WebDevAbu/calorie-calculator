const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  user_details: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_details",
    },
  ],
});

module.exports = mongoose.model("all_user", schema);

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define(
//     "all_user",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       dob: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       timestamps: false,
//     }
//   );
//   return User;
// };
