const express = require("express");
const usersController = ({
  getAllUsers,
  saveAUser,
} = require("../../controllers/users.controller"));
const router = express.Router();

router.route("/").get(usersController.getAllUsers).post(usersController.saveAUser);

module.exports = router;