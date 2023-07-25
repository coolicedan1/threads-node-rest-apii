const router = require("express").Router();

router.get("/register", async (req, res)=>{
  res.send("hey its user route")
})

module.exports = router;