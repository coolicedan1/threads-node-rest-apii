const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")

// REGISTER
router.post("/register", async (req, res)=>{
 const newUser = new User({
  username: req.body.username,
  email: req.body.email,
  password: req.body.password,
 });

 try{
  const user =  newUser.save();
  res.status(200).json(user);
 }catch(err){
  console.log(err)
 }
});

module.exports = router;