const path = require('path');
const helpers = require('../lib/helpers');
const _ = require('lodash');

const OUTPUT_DIR = 'public';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  viewEngine: 'pug',
  db: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
  },
  outputDirs: {
    scripts: path.join(OUTPUT_DIR, 'js'),
    images: path.join(OUTPUT_DIR, 'img'),
    stylesheets: path.join(OUTPUT_DIR, 'css')
  },
  locals: {
    _,
    title: 'Slava Pavlutin',
    themeColor: '#212128',
    helpers: helpers
  }
};
