const { expect } = require('chai');
const helpers = require('../lib/helpers');
const { LOREM } = helpers;


describe('helpers', function() {
  describe('.lorem()', function() {
    const expected = `${LOREM}`;

    it('generates dummy text', function () {
      const result = helpers.lorem(1);
      expect(result).to.eq(expected);
    });

    it('generates string without args', function () {
      const result = helpers.lorem();
      expect(result).to.eq(expected);
    });

    it('generates string with invalid args', function () {
      const result = helpers.lorem(-1);
      expect(result).to.eq(expected);
    });

    it('generates array when specified', function () {
      const result = helpers.lorem(3);
      expect(result.length).to.eq(3);
      expect(result).to.contain(expected);
    });
  });
});
