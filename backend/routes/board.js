const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Upload = require("../middleware/file");
const multiparty = require("connect-multiparty");
const mult = multiparty();

//http://localhost:3002/api/board/save-Task
router.post("/save-Task", Auth, ValidateUser, BoardController.saveTask);
//http://localhost:3002/api/board/list-Task
router.get("/list-Task", Auth, ValidateUser, BoardController.listTask);
//http://localhost:3002/api/board/update-Task
router.put("/update-Task", Auth, ValidateUser, BoardController.updateTask);
//http://localhost:3002/api/board/delete-Task
router.delete(
  "/delete-Task/:_id",
  Auth,
  ValidateUser,
  BoardController.deleteTask
);
//http://localhost:3002/api/board/save-TaskImg
router.post(
  "/save-TaskImg",
  mult,
  Upload,
  Auth,
  ValidateUser,
  BoardController.saveTaskImg
);

module.exports = router;
