const { expect } = require('chai');
const helpers = require('../lib/helpers');
const { LOREM } = helpers;


describe('helpers', () => {
  describe('.lorem()', () => {
    const expected = `${LOREM}`;

    it('generates dummy text', () => {
      const result = helpers.lorem(1);
      expect(result).to.eq(expected);
    });

    it('generates string without args', () => {
      const result = helpers.lorem();
      expect(result).to.eq(expected);
    });

    it('generates string with invalid args', () => {
      const result = helpers.lorem(-1);
      expect(result).to.eq(expected);
    });

    it('generates array when specified', () => {
      const result = helpers.lorem(3);
      expect(result.length).to.eq(3);
      expect(result).to.contain(expected);
    });
  });
});
