const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const mongoose = require('mongoose');
const config = require('./app/config');
const apiRouter = require('./app/routes/api-router');

const ENV = config.env;
const app = express();

app.set('view engine', config.viewEngine);
app.set('env', ENV);

if (ENV !== 'test') {
  mongoose.connect(config.db.URI);

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to', config.db.URI);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error', err);
  });

  const { scripts, stylesheets, images } = config.outputDirs;

  app.use(morgan('dev'));
  app.use(compression());
  app.use('/css', express.static(stylesheets));
  app.use('/js', express.static(scripts));
  app.use('/img', express.static(images));
}

app.get('/', (req, res) => {
  res.render('index');
});
app.use('/api/v1', apiRouter);
app.get('*', (req, res) => {
  res.render('index');
});

if (ENV !== 'test') {
  const server = app.listen(config.port, (err) => {
    if (err) { throw err; }
    console.log('Starting app on port', server.address().port);
  });
}

module.exports = app;
