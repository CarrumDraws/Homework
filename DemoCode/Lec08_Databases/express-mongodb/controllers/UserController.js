// Main DB Connection Logic Happens Here!

const User = require("../models/User.js");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    // Exclude '__v' and '-todos' from return
    const user = await User.findById(id).select("-__v -todos");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const postCreateUser = async (req, res) => {
  try {
    // handle duplicate username
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const putUpdateUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // User.findByIdAndUpdate(id, {data}, updatedDocReturned)
    const user = await User.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    // Send "No Content" response (204).
    // .end() explicitly sends the response.
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUserById, postCreateUser, putUpdateUser, deleteUserById };
