const express = require('express');
const Post = require('../models/post');
const Project = require('../models/project');

const apiRouter = express.Router();

apiRouter.get('/posts', (req, res, next) => {
  Post.find((err, posts) => {
    if (err) next(err);
    return res.json({ posts });
  });
});

apiRouter.get('/projects', (req, res, next) => {
  Project.find((err, projects) => {
    if (err) next(err);
    return res.json({ projects });
  });
});

module.exports = apiRouter;
