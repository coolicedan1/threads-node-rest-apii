const router = require("express").Router();
const Post = require("../models/Post");

// CREATE A POST

router.post("/", async (req, res)=>{
  const newPost = new Post(req.body)
  try{
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  }catch(err){
    res.status(500).json(err)
  }
});

// UPDATE A POST

router.put("/:id", async (req, res)=>{
  try{
  const post = await Post.findById(req.params.id);
  if(post.userId === req.body.userId){
      await post.updateOne({$set: req.body});
      res.status(200).json("the post has been updated");
  }else{
    res.status(403).json("you can update only your post");
  }
}catch(err){
  res.status(500).json("err")
}
});
// LIKE A POST
// GET A POST
// GET TIMELINE POSTS

module.exports = router;