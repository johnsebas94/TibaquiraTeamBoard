const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");

//http://localhost:3002/api/user/register-User
router.post("/registerUser", UserController.registerUser);
//http://localhost:3002/api/user/login
router.post("/login", UserController.login);
//http://localhost:3002/api/user/list-Users 
router.get(
  "/list-Users/:name?",
  Auth,
  ValidateUser,
  Admin,
  UserController.listUser
);
//http://localhost:3002/api/user/update-User
router.put("/updateUser", Auth, ValidateUser, Admin, UserController.updateUser);
//http://localhost:3002/api/user/delete-User
router.put("/deleteUser", Auth, ValidateUser, Admin, UserController.deleteUser);
//http://localhost:3002/api/user/register-Admin
router.post(
  "/registerAdmin",
  Auth,
  ValidateUser,
  Admin,
  UserController.registerAdmin
);

module.exports = router;