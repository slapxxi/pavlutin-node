/**
 * Generate a valid page title.
 * @param  {[String]} titleParts Parts of the generated title
 * @return {String} Page title
 */
function generateTitle(...titleParts) {
  return titleParts.join(' | ');
}

module.exports = { generateTitle };
