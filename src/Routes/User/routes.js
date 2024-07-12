const express = require("express");
const router = express.Router();
const { getUserFunction } = require("../../Controller/User/userController");

router.post("/getUser", getUserFunction);

module.exports = router;
