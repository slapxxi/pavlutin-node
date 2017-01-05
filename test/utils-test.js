const { expect } = require('chai');
const { generateTitle } = require('../lib/utils');


describe('utils', function() {
  describe('.generateTitle()', function() {
    it('generates valid title', function () {
      const result = generateTitle('Base', 'First', 'Second');
      expect(result).to.equal('Base | First | Second');
    });

    it('generates valid title when single part used', function () {
      const result = generateTitle('Base');
      expect(result).to.equal('Base');
    });

    it('returns empty string without args', function () {
      const result = generateTitle();
      expect(result).to.eq('');
    });

    it('combines titles correctly', function () {
      const result = generateTitle('Title', 'Generated | Title');
      expect(result).to.eq('Title | Generated | Title');
    });
  });
});
