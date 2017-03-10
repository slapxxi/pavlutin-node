const express = require('express');
const Post = require('../models/post');


const postsRouter = express.Router();

postsRouter.get('/', (req, res, next) => {
  Post.find((err, posts) => {
    if (err) next(err);
    return res.json({ posts });
  });
});

module.exports = postsRouter;
