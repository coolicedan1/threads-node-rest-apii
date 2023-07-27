const router = require("express").Router();
const User = require("../models/User");


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

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json("user not found");
    }

    return res.status(200).json(user); // if not invalid  return user
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

module.exports = router;