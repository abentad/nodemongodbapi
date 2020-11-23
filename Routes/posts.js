const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

//root route for posts
router.get("/", (req, res) => {
  try {
    const posts = Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

//route for specific post
router.get("/specific", (req, res) => {
  res.send("we are on a specific post");
});

//route for post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
