const { expect } = require('chai');
const { generateTitle } = require('../lib/utils');


describe('utils', function() {
  describe('.generateTitle()', function() {
    it('should generate a valid title', function () {
      const result = generateTitle('Base', 'First', 'Second');
      expect(result).to.equal('Base | First | Second');
    });

    it('should generate a valid title when some arguments missing', function () {
      const result = generateTitle('Base');
      expect(result).to.equal('Base');
    });

    it('should return an empty string when all arguments missing', function () {
      const result = generateTitle();
      expect(result).to.eq('');
    });

    it('should combine titles correctly', function () {
      const result = generateTitle('Title', 'Generated | Title');
      expect(result).to.eq('Title | Generated | Title');
    });
  });
});
