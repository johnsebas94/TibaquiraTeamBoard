const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");

//http://localhost:3002/api/role/register-Role
router.post(
  "/register-Role", 
  RoleController.registerRole
);
//http://localhost:3002/api/role/list-Role
router.get("/list-Role",  RoleController.listRole);
//http://localhost:3002/api/role/update-Role
router.put("/update-Role", Auth, ValidateUser, Admin, RoleController.updateRole);

module.exports = router;
