const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/meanDb";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

app.use(express.json());

//Register Router
const mainRouter = require("./routes/user");
app.use("/user", mainRouter);

con.on("open", function () {
  console.log("Connected...");
});
app.listen(3000);
