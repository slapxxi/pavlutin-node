import moment from 'moment';

/**
 * Concatenates class names given as an array of strings or
 * undefined values into a string compatible with "className" property.
 * @param  {Array<String>} classNames Array of values to concatenate
 * @return {String} className compatible string
 */
function combineClassNames(...classNames) {
  return classNames.reduce((acc, name) => {
    if (name === '' || name === undefined) {
      return acc;
    }
    return `${acc} ${name}`;
  }, '').trim();
}

/**
 * Returns a current year;
 * @return {Number} Current year
 */
function currentYear() {
  return new Date().getFullYear();
}

/**
 * Returns a function that cycles through
 * a collection indefinitely.
 * @param  {Any} collection
 * @return {Function}
 */
function cycle(collection) {
  let index = 0;
  return function () {
    const result = collection[index];
    if ((index + 1) === collection.length) {
      index = 0;
    } else {
      index += 1;
    }
    return result;
  };
}

function toHumanReadableDate(timestamp) {
  return moment(timestamp).fromNow();
}

export { combineClassNames, currentYear, cycle, toHumanReadableDate };
