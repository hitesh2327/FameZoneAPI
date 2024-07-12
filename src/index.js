require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
global.appRoot = path.resolve(__dirname);

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

const router = express.Router();
const UserRoutes = require("./Routes/User/routes");

// Middleware for setting headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,PUT,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", router);
app.use("/api/", UserRoutes);

// Error handling middleware should be placed after all other middleware and routes
app.use((error, req, res, next) => {
  return res.status(500).json({
    message: error.message,
  });
});

const PORT = 7800;
app.listen(PORT, "localhost",() => {
  console.log("SERVER RUNNING ON 7800");
});
