const User = require("../models/User");

exports.get_userPosts = async (req, res) => {
  // user should have been authenticated, has an active session
  try {
    const user = await User.findById(req.session.uid).populate("posts");
    console.log(user);
    res.render("userPosts", user);
  } catch (e) {
    console.error(e);
  }
};
exports.get_profile = (req, res) => {
  // user should have been authenticated, has an active session
  res.render("profile", { uid: req.session.uid });
};
exports.post_register = async (req, res) => {
  try {
    // do some data validation
    // hash the password in the request body, update the data, and create the user
    const user = await User.create(req.body);
    console.log("post_register success: ", user);
    res.status(201).json({ message: "Account was successfully registered." });
  } catch (e) {
    console.log(e);
  }
};

exports.post_login = async (req, res) => {
  try {
    // check for the user credentials in the database
    // verify the user's password matches the encrypted version

    // link this session to the user by storing the unique identifier & roles
    //! hard-coding the uid from the database, must be updated if running seed files
    req.session.uid = "639355df2c8a12a68c1ae9a9";

    console.log("req.session =", req.session);
    console.log("req.sessionID =", req.sessionID);

    // if using cookies, set the response cookie header with res.cookie()
    res.status(200).json({ message: "You've signed in successfully." });
  } catch (e) {
    console.log(e);
  }
};

exports.post_logout = async (req, res) => {
  // user should have been authenticated, has an active session
  req.session.destroy();
  // the cookie SID is now linked to a session without any UID
  res.status(200).json({ message: "You've logged out successfully." });
};

exports.patch_updateProfile = (req, res) => {};
