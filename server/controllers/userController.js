const UserDetails = require("../model/user_details");
const AllUser = require("../model/all_user");

// add data
exports.addData = (req, res) => {
  const data = new UserDetails(req.body);
  // console.log(data);
  data
    .save()
    .then((response) => {
      console.log("response", response);
      AllUser.findByIdAndUpdate(
        response.userId,
        { $push: { user_details: response._id } },
        { new: true, useFindAndModify: false }
      )
        .then((response1) => {
          console.log("response1", response1);
          return res.status(200).send(response1);
        })
        .catch((err) => {
          return res.status(500).send(err);
        });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

// get all data
exports.findAll = async (req, res) => {
  console.log("findall-");
  try {
    const data = await UserDetails.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send("Error", err);
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserDetails.findById(id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send("Error", err);
  }
};

// delete data
exports.deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserDetails.findByIdAndDelete(id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// update data
exports.updateData = async (req, res) => {
  try {
    const result = await UserDetails.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// get food item
exports.getFoodItem = (req, res) => {};

// get energy burn
exports.getEnergyBurn = (req, res) => {};
