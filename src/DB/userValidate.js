require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.userValidate = (req, callback) => {
  console.log("DATA: ", req.body);
  const { sUserName, sPassword } = req.body;
  let Context = { message: "Reached here..." };
  if (sUserName === "Ram" && sPassword === "Riyu") {
    const  token = jwt.sign({sUserName})
  }
  return callback(Context);
};
