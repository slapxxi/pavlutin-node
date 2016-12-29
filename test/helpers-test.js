const { expect } = require('chai');
const helpers = require('../lib/helpers');
const { LOREM } = helpers;


describe('helpers', function() {
  describe('.lorem()', function() {
    const expected = `<p>${LOREM}</p>`;

    it('should generate dummy text', function () {
      const result = helpers.lorem(1);
      expect(result).to.eq(expected);
    });

    it('should generate a single paragraph without args', function () {
      const result = helpers.lorem();
      expect(result).to.eq(expected);
    });

    it('should generate a single paragraph with invalid args', function () {
      const result = helpers.lorem(-1);
      expect(result).to.eq(expected);
    });

    it('should generate multiple paragraphs', function () {
      const result = helpers.lorem(3);
      expect(result).to.eq(expected + expected + expected);
    });

    it('wraps dummy text in specified HTML tag', function () {
      const result = helpers.lorem(1, 'div');
      const expected = `<div>${LOREM}</div>`;
      expect(result).to.eq(expected);
    });
  });
});
