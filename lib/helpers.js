const _ = require('lodash');

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada at dolor in pretium. Nulla tincidunt imperdiet vulputate. Nullam egestas elementum nunc, at dignissim arcu ornare vitae. Quisque euismod quis est eu venenatis. Sed neque elit, dignissim id interdum non, varius ut nisl. Integer at velit a eros ornare rutrum. Pellentesque id sem mauris. Pellentesque quis ullamcorper orci. Morbi at volutpat ex. Sed ultrices mi urna, et venenatis dolor elementum sit amet. Nulla fringilla nec libero in ornare. Quisque porta volutpat turpis, vitae laoreet tellus scelerisque sed. Proin libero massa, venenatis ut quam non, pharetra ornare libero. Sed sed sagittis nulla."

/**
 * Generate an HTML paragraph with dummy text.
 * @param  {Number} n How many paragraphs to generate
 * @param  {String} wrapper HTML tag to wrap dummy text
 * @return {String}   Paragraphs with dummy text
 */
function lorem(n, wrapper='p') {
  n = n >= 1 ? n : 1;
  return _.repeat(`<${wrapper}>${LOREM}</${wrapper}>`, n);
}

module.exports = {LOREM, lorem};
