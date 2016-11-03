const express = require('express');
const morgan = require('morgan');
const compression = require('compression');


const app = express();
const env = process.env.NODE_ENV || 'development';

app.locals.title = "Slava Pavlutin"
app.locals.themeColor = "#212128";
app.locals.lorem = lorem;

app.set('env', env);
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));
app.use(compression());

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

if (app.get(env) === 'production') {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port ${server.address().port}`);
  });
} else {
  app.listen(8000);
}

function generateTitle(...pieces) {
  return pieces.join(' | ')
}

function lorem() {
  return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nisi, delectus perferendis distinctio adipisci harum, earum qui, sequi, ratione inventore eveniet impedit! Corporis maiores facere ducimus non eaque voluptatibus dolorem?";
}
