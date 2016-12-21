const express = require('express');
const config = require('../config');
const { generateTitle } = require('../../lib/utils');


const pagesRouter = express.Router();
const BASE_TITLE = config.locals.title;

pagesRouter.get('/projects', (req, res) => {
  const title = generateTitle(BASE_TITLE, 'Projects');
  res.render('projects', {title});
});

pagesRouter.get('/contact', (req, res) => {
  const title = generateTitle(BASE_TITLE, 'Contact');
  res.render('contact', {title});
});

module.exports = pagesRouter;
