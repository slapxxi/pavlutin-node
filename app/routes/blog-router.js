const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');
const { generateTitle } = require('../../lib/utils');
const Post = require('../models/post');


const blogRouter = express.Router();
const BASE_TITLE = config.locals.title;

blogRouter.get('/', (req, res, next) => {
  const title = generateTitle(BASE_TITLE, 'Blog');
  Post.find((err, posts) => {
    if (err) { next(err) }
    res.render('blog', {title, posts});
  });
});

module.exports = blogRouter;
