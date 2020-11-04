const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const { validateNewUser } = require("../joi_validation")

router.post("/", async (req, res) => {
    const { error } = validateNewUser(req.body)
    if(error) {
        return res.status(501).json(error.details[0].message)
    }
     // Check if this user already exisits
     let user = await Users.findOne({ email: req.body.email });
     if (user) {
         return res.status(400).send('That user already exisits!');
     } else {
         // Insert the new user if they do not exist yet
         user = new Users({
             name: req.body.name,
             city: req.body.city,
             email: req.body.email,
             password: req.body.password
         });
         await user.save();
         res.send(user);
     }
});

module.exports = router;
