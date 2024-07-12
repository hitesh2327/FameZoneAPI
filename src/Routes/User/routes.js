const express = require("express");
const router = express.Router();
const {
  getUserFunction,
  userValidateFunction,
} = require("../../Controller/User/userController");

router.post("/getUser", getUserFunction);
router.post("/userValidate", userValidateFunction);

module.exports = router;
