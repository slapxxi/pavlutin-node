const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const mongoose = require('mongoose');

const config = require('./app/config');
const pagesRouter = require('./app/routes/pages-router');
const blogRouter = require('./app/routes/blog-router');
const { pageNotFound } = require('./app/middleware/http');


const ENV = config.env;
const app = express();

app.locals = Object.assign({}, app.locals, config.locals);

app.set('env', ENV);
app.set('view engine', config.viewEngine);

if (ENV !== 'test') {
  mongoose.connect(config.db.URI);

  mongoose.connection.on('connected', () => {
    console.log("Mongoose connected to", config.db.URI);
  });

  mongoose.connection.on('disconnected', () => {
    console.log("Mongoose disconnected");
  });

  mongoose.connection.on('error', (err) => {
    console.log("Mongoose connection error", err);
  });

  app.use(morgan('dev'));
  app.use(compression());
}

const {scripts, stylesheets, images } = config.outputDirs;

app.use('/css', express.static(stylesheets));
app.use('/js', express.static(scripts));
app.use('/img', express.static(images));

app.use('/', pagesRouter);
app.use('/blog', blogRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.use(pageNotFound());

if (ENV !== 'test') {
  const server = app.listen(config.port, (err) => {
    if (err) { throw err }
    console.log('Starting app on port', server.address().port);
  });
}

module.exports = app;
