const express = require('express');
const Post = require('../models/post');

const apiRouter = express.Router();

apiRouter.get('/posts', (req, res, next) => {
  Post.find((err, posts) => {
    if (err) next(err);
    return res.json({ posts });
  });
});

module.exports = apiRouter;
