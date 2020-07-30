const router = require("express").Router();
const userController = require("../controllers/user-controller");

router
  .route("/user")
  .get(userController.getUser)
  .post(userController.newUser)
  .delete(userController.deleteUser);

module.exports = router;
