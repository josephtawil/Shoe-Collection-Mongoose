<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const {getUser, addUser, deleteUser} = require('../controllers/user-controller');

// get a single user or all users
router.get("/user", getUser);

//create a user 
router.post("/user", addUser);
router.delete("/delete", deleteUser);
module.exports = router;
=======
const router = require("express").Router();
const userController = require("../controllers/user-controller");

router
  .route("/user")
  .get(userController.getUser)
  .post(userController.newUser)
  .delete(userController.deleteUser);

module.exports = router;
>>>>>>> c45e2c0e8e633bcc2320e6d0551be0624bc76c81
