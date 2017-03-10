/**
 * Concatenates class names given as an array of strings or
 * undefined values into a string compatible with "className" property.
 * @param  {Array<String>} classNames Array of values to concatenate
 * @return {String} className compatible string
 */
function combineClassNames(...classNames) {
  return classNames.reduce((name, acc: any) => {
    if (name && name !== '') {
      return `${acc} ${name}`;
    }
    return acc;
  }, '');
}

/**
 * Returns a current year;
 * @return {Number} Current year
 */
function currentYear(): number {
  return new Date().getFullYear();
}

export { combineClassNames, currentYear };
