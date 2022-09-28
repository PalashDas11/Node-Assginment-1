const express = require("express");
const usersController = ({
  getAllUsers,
  saveAUser,
  updateUser,
  detailsUser,
  randomUser,
  deleteUser,
} = require("../../controllers/users.controller"));
const router = express.Router();

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.saveAUser);
router.route("user/random").get(usersController.randomUser);

router
  .route("/:id")
  .patch(usersController.updateUser)
  .get(usersController.detailsUser)
  .delete(usersController.deleteUser);

module.exports = router;
