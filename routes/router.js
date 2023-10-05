const express = require("express");

const {
  createUser,
  getUser,
  singleUser,
  updateUser,
  deleteUser,
} = require("../controller/UserCtrl");

const router = express.Router();

router.post("/", createUser);

router.get("/", getUser);

router.get("/:id", singleUser);

router.put("/:id", updateUser);

router.delete("/", deleteUser);

module.exports = router;
