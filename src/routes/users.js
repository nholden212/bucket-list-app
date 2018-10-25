const express = require("express");
const router = express.Router();
const validation = require("./validation");
const userController = require("../controllers/userController");

router.get("/users/sign_up", userController.renderSignUp);
router.get("/users/log_in", userController.renderLogIn);
router.get("/users/log_out", userController.renderLogOut);
router.get("/users/profile", userController.renderProfile);

router.post("/users", validation.validateUsers, userController.createUser);
router.post("/users/log_in", userController.logIn);
router.post("/users/log_out", userController.logOut);

module.exports = router;
