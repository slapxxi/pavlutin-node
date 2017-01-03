const _ = require('lodash');

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada at dolor in pretium. Nulla tincidunt imperdiet vulputate. Nullam egestas elementum nunc, at dignissim arcu ornare vitae. Quisque euismod quis est eu venenatis. Sed neque elit, dignissim id interdum non, varius ut nisl. Integer at velit a eros ornare rutrum. Pellentesque id sem mauris. Pellentesque quis ullamcorper orci. Morbi at volutpat ex. Sed ultrices mi urna, et venenatis dolor elementum sit amet. Nulla fringilla nec libero in ornare. Quisque porta volutpat turpis, vitae laoreet tellus scelerisque sed. Proin libero massa, venenatis ut quam non, pharetra ornare libero. Sed sed sagittis nulla."

/**
 * Generate a dummy text.
 * @param  {Number} n How many times to repeat
 * @return {String, [String]} Dummy text
 */
function lorem(n=1) {
  n = n <= 1 ? 1 : n;
  if (n === 1) {
    return LOREM;
  }
  return _.times(n, _.constant(LOREM));
}

module.exports = {LOREM, lorem};
