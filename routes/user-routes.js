const express = require('express');
const router = express.Router();
const {getUser, addUser} = require('../controllers/user-controller');

// get a single user or all users
router.get("/user", getUser);

//create a user 
router.post("/user", addUser);

module.exports = router;