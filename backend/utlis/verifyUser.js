const jwt = require("jsonwebtoken");

module.exports.verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      throw new Error("token not found!");
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        throw new Error("User not authorized!");
      }

      req.user = user;
      next();
    });

  } catch (err) {
    console.log("User unauthorized", err.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
