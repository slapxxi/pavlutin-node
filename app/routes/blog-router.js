const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');
const Post = require('../models/post');
const { generateTitle } = require('../../lib/utils');


const blogRouter = express.Router();
const BASE_TITLE = config.locals.title;

blogRouter.get('/', (req, res, next) => {
  const title = generateTitle(BASE_TITLE, 'Blog');
  Post.find((err, posts) => {
    if (err) { next(err) }
    res.render('blog', {title, posts});
  });
});

// TODO: Find the post corresponding to the slug or display an error
blogRouter.get('/:slug', (req, res, next) => {
  const { slug } = req.params;
  Post.findOne({slug}, (err, post) => {
    if (err) { next(err) }
    res.render('post', {post});
  });
});

module.exports = blogRouter;
