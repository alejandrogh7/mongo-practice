const express = require("express");
const {
  getUsers,
  getUserID,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/user.js");

const router = express.Router();

//(GET)-users/:id
router.get("/:id", getUserID);

//(GET)-users/
router.get("/", getUsers);

//(POST)-users
router.post("/", postUser);

//(PUT)-users/:id
router.put("/:idUser", putUser);

//(PUT)-users/:id/:id
router.put("/:idUser/:idBook", putUser);

//(DELETE)-users/:id
router.delete("/:id", deleteUser);

module.exports = router;
