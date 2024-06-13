const router = require("express").Router();
const UserController = require("../controllers/UserController");
const { auth_session } = require("../middleware/auth");

router.get("/posts", auth_session, UserController.get_userPosts);
router.get("/profile", auth_session, UserController.get_profile);

router.post("/register", UserController.post_register);
router.post("/login", UserController.post_login);
router.post("/logout", auth_session, UserController.post_logout);

router.patch(
  "/updateProfile",
  auth_session,
  UserController.patch_updateProfile
);

module.exports = router;
