const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const stylelint = require('gulp-stylelint');
const webpackConfig = require('./webpack.config');
const browsersync = require('browser-sync');
const util = require('gulp-util');


const config = {
  patterns: {
    js: 'src/**/*.js',
    css: 'src/**/*.css',
    scss: 'src/**/*.{css,scss}',
    img: 'src/**/*.{png,ico,jpeg,jpg,svg}',
    html: 'views/**/*.pug'
  },
  dest: {
    js: 'public/js',
    css: 'public/css',
    img: 'public/img'
  },
  production: !!util.env.production
}

gulp.task('default', ['build'])

gulp.task('watch', ['browsersync'], () => {
  gulp.watch(config.patterns.js, ['build:js']);
  gulp.watch(config.patterns.scss, ['build:css']);
  gulp.watch(config.patterns.img, ['build:img']);
  gulp.watch(config.patterns.html, () => {
    browsersync.reload();
  });
});

gulp.task('build', ['build:css', 'build:js', 'build:img']);

gulp.task('build:css', ['clean:css'], () => {
  const postcssProcessors = [
    require('precss')({
      import: {extension: 'scss'}
    }),
    require('postcss-cssnext')
  ];

  return gulp.src(config.patterns.css)
    .pipe(sourcemaps.init())
    .pipe(postcss(postcssProcessors))
    .on('error', handleError)
    .pipe(config.production ? cssnano({discardComments: {removeAll: true}}) : util.noop())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'))
    .pipe(browsersync.stream());
});

gulp.task('build:js', ['clean:js'], () => {
  return gulp.src('src/js/index.js')
    .pipe(webpack(webpackConfig))
    .on('error', handleError)
    .pipe(gulp.dest(config.dest.js))
    .pipe(browsersync.stream());
});

gulp.task('build:img', ['clean:img'], () => {
  gulp.src(config.patterns.img)
    .pipe(imagemin())
    .pipe(gulp.dest('public'));
});

gulp.task('clean:css', () => {
  return del([config.dest.css]);
});

gulp.task('clean:js', () => {
  return del([config.dest.js]);
});

gulp.task('clean:img', () => {
  return del([config.dest.img]);
});

gulp.task('lint:css', () => {
  return gulp.src(config.patterns.scss)
    .pipe(stylelint({reporters: [{formatter: 'string', console: true}]}));
});

gulp.task('browsersync', () => {
  browsersync.init({
    proxy: 'localhost:8000'
  });
});

function handleError(e) {
  console.log(e.toString());
  this.emit('end');
}
