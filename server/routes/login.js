const express = require("express");
router = express.Router();

const jwt = require('jsonwebtoken')
const { validateLogin } = require("../joi_validation")
const Users = require("../models/users");

router.post("", async (req, res) => {
  const { error } = validateLogin(req.body)
  const { email, password } = req.body;
  if(error) {
    const [ details ] = error.details;
    return res.status(301).json(details.message)
  }
  let user = await Users.findOne({ email });
    if(user) {
      if(user.password === password) {
        const token = jwt.sign({email:req.body.email}, "secret-key")
        res.json({token, user});
      } else {
      res.status(410).json("Please Check Password");
      }
    } else {
      res.status(420).json("User Not Found, Please Check Credentials");
    }
    
});

module.exports = router;