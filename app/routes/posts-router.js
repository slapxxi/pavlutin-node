const express = require('express');
const Post = require('../models/post');


const postsRouter = express.Router();

postsRouter.get('/', (req, res, next) => {
  Post.find((err, posts) => {
    if (err) next(err);
    res.json({posts});
  });
});

postsRouter.get('/:slug', (req, res, next) => {
  console.log(req.params);
});

module.exports = postsRouter;
