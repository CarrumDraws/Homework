// Main DB Connection Logic Happens Here!

const User = require("../models/User.js");
const Songs = require("../models/Song.js");

const getSongs = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).populate({
      path: "likes", // the field in User you want to populate
      select: "-_id -__v", // Exclude '__v' and '-todos' from return
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.likes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const existingUser = await User.findOne({ _id: id });

    if (!existingUser)
      return res.status(404).json({ message: "User not found" });

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getSongs, updateUser };
