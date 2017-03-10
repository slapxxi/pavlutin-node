const express = require('express');
const postsRouter = require('./posts-router');


const apiRouter = express.Router();

apiRouter.use('/posts', postsRouter);

module.exports = apiRouter;
