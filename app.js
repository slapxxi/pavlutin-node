const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const config = require('./config');
const { generateTitle } = require('./lib/utils');


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

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/blog', (req, res) => {
  const title = generateTitle(app.locals.title, 'Blog');
  res.render('blog', {title});
});

app.get('/projects', (req, res) => {
  const title = generateTitle(app.locals.title, 'Projects');
  res.render('projects', {title});
});

app.get('/contact', (req, res) => {
  const title = generateTitle(app.locals.title, 'Contact');
  res.render('contact');
});

if (ENV !== 'test') {
  const server = app.listen(config.port, (err) => {
    if (err) { throw err }
    console.log('Starting app on port', server.address().port);
  });
}

module.exports = app;
