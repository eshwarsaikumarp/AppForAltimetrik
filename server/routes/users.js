const express = require("express");
const router = express.Router();
const users = require("../models/users");

router.get("/all", async (req, res) => {
  try {
    const result = await users.find();
    res.json(result);
  } catch (err) {
    res.json("error");
  }
});

module.exports = router;
