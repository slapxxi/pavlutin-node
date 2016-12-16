const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const config = require('./app/config');
const pagesRouter = require('./app/routes/pages-router');
const { pageNotFound } = require('./app/middleware/http');


const ENV = config.env;
const app = express();

app.locals = Object.assign({}, app.locals, config.locals);

app.set('env', ENV);
app.set('view engine', config.viewEngine);

app.use(compression());
app.use(morgan('dev'));

app.use('/css', express.static(config.outputDirs.stylesheets));
app.use('/js', express.static(config.outputDirs.scripts));
app.use('/img', express.static(config.outputDirs.images));

app.use('/', pagesRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.use(pageNotFound);

if (ENV !== 'test') {
  const server = app.listen(config.port, (err) => {
    if (err) { throw err }
    console.log('Starting app on port', server.address().port);
  });
}

module.exports = app;
