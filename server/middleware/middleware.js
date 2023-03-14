const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  console.log("middleware-------");
  const token = req.headers.auth;
  if (!token) {
    return res.status(500).send("Null Token");
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(500).send("invalid token");
    } else if (user.email != req.body.email) {
      return res.status(500).send("invalid email");
    }
    next();
  });
};

module.exports = middleware;
