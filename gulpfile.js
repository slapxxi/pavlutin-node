const gulp = require('gulp');
const del = require('del');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const stylelint = require('gulp-stylelint');
const browsersync = require('browser-sync').create();
const util = require('gulp-util');
const mocha = require('gulp-mocha');
const sass = require('gulp-sass');


const config = {
  patterns: {
    js: 'src/**/*.js',
    css: 'src/**/*.css',
    scss: 'src/**/*.{css,scss}',
    img: 'src/**/*.{png,ico,jpeg,jpg,svg}',
    html: 'views/**/*.pug',
    test: ['test/**/*.js', 'app/**/*.js'],
  },
  dest: {
    js: 'public/js',
    css: 'public/css',
    img: 'public/img',
  },
  production: !!util.env.production,
};

gulp.task('default', ['build']);

gulp.task('watch', ['browsersync'], () => {
  gulp.watch(config.patterns.scss, ['build:css']);
  gulp.watch(config.patterns.img, ['build:img']);
  gulp.watch(config.patterns.test, ['test']);
  gulp.watch(config.patterns.html, () => {
    browsersync.reload();
  });
});

gulp.task('build', ['build:css', 'build:img']);

gulp.task('build:css', ['clean:css'], () => {
  const postcssProcessors = [
    require('postcss-cssnext'),
  ];

  return gulp.src(config.patterns.css)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules/susy/sass'],
    }))
    .on('error', handleError)
    .pipe(postcss(postcssProcessors))
    .on('error', handleError)
    .pipe(config.production ? cssnano({ discardComments: { removeAll: true } }) : util.noop())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'))
});

gulp.task('build:img', ['clean:img'], () => {
  gulp.src(config.patterns.img)
    .pipe(imagemin())
    .on('error', handleError)
    .pipe(gulp.dest('public'));
});

gulp.task('clean:css', () => del([config.dest.css]));

gulp.task('clean:img', () => del([config.dest.img]));

gulp.task('browsersync', () => {
  browsersync.init({
    files: 'public/**/*.css',
    proxy: 'localhost:8000',
    notify: false,
  });
});

gulp.task('test', () => {
  process.env.NODE_ENV = 'test';
  gulp.src('test/**/*.js', { read: false })
    .pipe(mocha({
      growl: true,
      require: './test/test-helper',
    }))
    .on('error', util.log);
});

function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}
