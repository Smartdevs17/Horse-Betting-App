// Require NPM packages
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const cors = require("cors")
// Connect to Mongodb
constconnection = require("./db/config");

if(process.env.PORT === "development"){
  app.use(morgan("dev"))
}

//middleware
app.use(express.json());
app.use(helmet());
// app.use(morgan("common"));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started running on port ${port} `);
});
