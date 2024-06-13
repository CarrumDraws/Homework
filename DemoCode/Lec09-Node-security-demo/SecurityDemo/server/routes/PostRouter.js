const router = require("express").Router();
const PostController = require("../controllers/PostController");

router.get('/thread/:id', PostController.get_thread);
router.post('/newPost', PostController.post_newPost);
router.post('/comment', PostController.post_comment);
router.patch('/update', PostController.patch_update);

module.exports = router;