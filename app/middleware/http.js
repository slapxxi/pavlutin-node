const { locals } = require('../../app/config');
const { generateTitle } = require('../../lib/utils');


/**
 * Return 404 middleware with options provided.
 * @param  {String} templateName Template to render
 * @return {Function} Middleware function
 */
function pageNotFound(templateName='404') {
  return function(req, res) {
    const title = generateTitle(locals.title, 'Page Not Found');
    res.status(404).render(templateName, {title});
  };
}

module.exports = {pageNotFound};
