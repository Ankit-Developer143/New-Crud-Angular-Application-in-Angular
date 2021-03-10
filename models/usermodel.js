const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
  name: String,
  capital: String,
});
module.exports = mongoose.model("country", alienSchema);
