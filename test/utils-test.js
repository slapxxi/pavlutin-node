const { expect } = require('chai');
const { generateTitle } = require('../lib/utils');


describe('utils', () => {
  describe('.generateTitle()', () => {
    it('generates valid title', () => {
      const result = generateTitle('Base', 'First', 'Second');
      expect(result).to.eq('Base | First | Second');
    });

    it('generates valid title when single part used', () => {
      const result = generateTitle('Base');
      expect(result).to.eq('Base');
    });

    it('returns empty string without args', () => {
      const result = generateTitle();
      expect(result).to.eq('');
    });

    it('combines titles correctly', () => {
      const result = generateTitle('Title', 'Generated | Title');
      expect(result).to.eq('Title | Generated | Title');
    });
  });
});
