const path = require('path');
const helpers = require('./lib/helpers');

const OUTPUT_DIR = 'public';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  outputDirs: {
    scripts: path.join(OUTPUT_DIR, 'js'),
    images: path.join(OUTPUT_DIR, 'img'),
    stylesheets: path.join(OUTPUT_DIR, 'css')
  },
  locals: {
    title: 'Slava Pavlutin',
    themeColor: '#212128',
    helpers: helpers
  }
};
