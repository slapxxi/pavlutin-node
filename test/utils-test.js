const { expect } = require('chai');
const { generateTitle } = require('../lib/utils');


describe('utils', function() {
  describe('.generateTitle()', function() {
    it('should create a valid title', function () {
      const result = generateTitle('Base', 'First', 'Second');
      expect(result).to.equal('Base | First | Second');
    });
  });
});
