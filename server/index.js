require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./connection/connection");
const user = require("./routes/userRoute.js");
const login = require("./routes/loginRoute.js");
const food_item = require("./routes/food_itemRoute");
const exercise = require("./routes/exerciseRoute");

const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(user);
app.use(login);
app.use(food_item);
app.use(exercise);

app.get("/", (req, res) => {
  res.send("server is running..");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
