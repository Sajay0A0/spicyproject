const User = require('../model/userDetails');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const jwtSecretKey = "food123";

const createUser = async (req, res) => {
  let hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ mail: req.body.mail });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User with this email already exists" });
    }

    // Create a new user if no user with the given email exists
    await User.create({
      name: req.body.name,
      mail: req.body.mail,
      password: hashedPassword,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "An error occurred while creating the user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ mail: req.body.mail });

    if (user) {
      const comparePwd = await bcrypt.compare(req.body.password, user.password);

      if (comparePwd) {
        const authToken = jwt.sign({ mail: user.mail }, jwtSecretKey, {
          expiresIn: "1d",
        });
        res.json({ success: true, authToken, userId: user._id, user });
        console.log(authToken);
      } else {
        res.status(400).json({ error: "incorrect password", success: false });
      }
    } else {
      res.status(400).json({ error: "user not found", success: false });
    }
   } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "an error occurred" });
  }
};


module.exports = {
  createUser,
  loginUser,
};
