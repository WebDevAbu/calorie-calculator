const mongoose = require("mongoose");

const connect = mongoose
  .connect("mongodb://localhost:27017/calorie-calculator")
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connect;

// const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("calorie_calculator", "root", "Torab@000sql", {
//   host: "localhost",
//   logging: false,
//   dialect: "mysql",
//   pool: { max: 5, min: 0, idel: 10000 },
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log("error" + err);
//   });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.AllUser = require("../model/all_user")(sequelize, DataTypes);
// db.UserDetails = require("../model/user_details")(sequelize, DataTypes);
// db.Exercise = require("../model/exercise")(sequelize, DataTypes);
// db.FoodItem = require("../model/food_item")(sequelize, DataTypes);

// db.sequelize.sync({ force: false });

// // one to many relation

// db.AllUser.hasMany(db.UserDetails);
// db.UserDetails.belongsTo(db.AllUser);

// module.exports = db;
