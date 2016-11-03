const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const config = require('./config');
const { generateTitle, lorem } = require('./lib/utils');


const app = express();

app.locals = Object.assign({}, app.locals, config.locals);

app.set('env', config.env);
app.set('view engine', 'pug');

app.use(compression());
app.use(morgan('dev'));

app.use('/css', express.static(config.outputDirs.stylesheets));
app.use('/img', express.static(config.outputDirs.images));
app.use('/js', express.static(config.outputDirs.scripts));

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

if (app.get('env') === 'production') {
  const server = app.listen(config.PORT, () => {
    console.log('Starting app on port ', server.address().port);
  });
} else {
  app.listen(8000);
}
