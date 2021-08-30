const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Upload = require("../middleware/file");
const multiparty = require("connect-multiparty");
const mult = multiparty();

//http://localhost:3002/api/board/save-Task
router.post("/saveTask", Auth, ValidateUser, BoardController.saveTask);
//http://localhost:3002/api/board/list-Task
router.get("/listTask", Auth, ValidateUser, BoardController.listTask);
//http://localhost:3002/api/board/update-Task
router.put("/updateTask", Auth, ValidateUser, BoardController.updateTask);
//http://localhost:3002/api/board/delete-Task
router.delete(
  "/deleteTask/:_id",
  Auth,
  ValidateUser,
  BoardController.deleteTask
);
//http://localhost:3002/api/board/save-TaskImg
router.post(
  "/saveTaskImg",
  mult,
  Upload,
  Auth,
  ValidateUser,
  BoardController.saveTaskImg
);

module.exports = router;

