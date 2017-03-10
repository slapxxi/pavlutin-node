const { expect } = require('chai');
const { generateTitle } = require('../lib/utils');
const { combineClassNames, currentYear } = require('../src/js/utils');


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

  describe('.combineClassNames()', () => {
    it('combines class names', () => {
      const result = combineClassNames('nav', 'active');
      expect(result).to.eq('active nav');
    });

    it('ignores undefined values', () => {
      const result = combineClassNames(undefined, 'active');
      expect(result).to.eq('active');
    });

    it('ignores empty strings', () => {
      const result = combineClassNames('', 'active');
      expect(result).to.eq('active');
    });
  });

  describe('.currentYear()', () => {
    it('returns current year', () => {
      const result = currentYear();
      expect(result).to.eq(2017);
    });
  });
});
