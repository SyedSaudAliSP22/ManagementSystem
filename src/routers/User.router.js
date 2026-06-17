const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../models/User.model");

//create user
router.post("/", (req, res, next) => {
  //get body info
});

//get all users
router.get("/", (req, res, next) => {
  getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

//get user by userid
router.get("/:userId", (req, res, next) => {
  const { userId } = req.params;
  getUserById(parseInt(userId))
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

//update user by userid
router.put("/:userId", (req, res, next) => {
  const { userId } = req.params;
  //get body info
});

//delete user
router.delete("/:userId", (req, res, next) => {
  const { userId } = req.params;
  deleteUserById(parseInt(userId))
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
