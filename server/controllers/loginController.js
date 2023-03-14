const AllUser = require("../model/all_user");
const jwt = require("jsonwebtoken");

// get All data
exports.findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await AllUser.findById(id).populate("user_details");
    console.log("data", data);
    if (data == null) {
      return res.status(500).send("No user");
    }
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// get one data
exports.login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  try {
    const data = await AllUser.findOne({ email });
    if (data.password != password) {
      return res.status(500).send("invalid email or password");
    }
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
    return res.status(200).send({ token, data });
  } catch (err) {
    return res.status(500).send(err);
  }
};

// register
exports.register = async (req, res) => {
  const data = new AllUser(req.body);
  try {
    const user = await data.save();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
};
