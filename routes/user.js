const express = require("express");
const router = express.Router();
const Model = require("../models/usermodel");

router.get("/", async (req, res, next) => {
  try {
    const aliens = await Model.find();
    res.json(aliens);
  } catch (err) {
    res.send(err);
  }
});

router.post("/create", async (req, res, next) => {
  const aliens = new Model({
    name: req.body.name,
    capital: req.body.capital,
  });
  try {
    const data = await aliens.save();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});

router.put("/update", (req, res, next) => {
  Model.findById(req.body._id, async (err, data) => {
    data.name = req.body.name;
    data.capital = req.body.capital;
    try {
      const value = await data.save();
      res.json(value);
    } catch (err) {
      res.send(err);
    }
  });
});
router.delete("/delete/:id", (req, res, next) => {
  Model.findOneAndRemove(req.params.id,async(err, data) => {
    try {
      await res.json("delete succefully", data.save());
    
    } catch (err) {
      res.send(err);
    }
  });
});

module.exports = router;
