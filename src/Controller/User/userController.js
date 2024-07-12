const { getUser } = require("../../DB/getUser");
const { userValidate } = require("../../DB/userValidate");

module.exports = {
  getUserFunction: (req, res) => {
    getUser(req, (context) => {
      res.status(200).json(context);
    });
  },
  userValidateFunction: (req, res) => {
    userValidate(req, (context) => {
      res.status(200).json(context);
    });
  },
};
