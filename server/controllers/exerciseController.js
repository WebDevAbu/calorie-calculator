const Exercise = require("../model/exercise");

exports.addExercise = async (req, res) => {
  try {
    const data = new Exercise(req.body);
    const exercise = await data.save();
    return res.status(200).send(exercise);
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.getExercise = async (req, res) => {
  console.log("get exercise----->>");
  try {
    const data = await Exercise.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.stauts(500).send(err);
  }
};
