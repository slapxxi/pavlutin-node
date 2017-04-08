import { expect } from 'chai';
import {
  combineClassNames,
  currentYear,
  cycle,
  setTitle,
} from '../src/js/utils';

describe('utils', () => {
  describe('combineClassNames', () => {
    it('combines class names', () => {
      const result = combineClassNames('nav', 'active');
      expect(result).to.eq('nav active');
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

  describe('currentYear', () => {
    it('returns current year', () => {
      const result = currentYear();
      expect(result).to.eq(2017);
    });
  });

  describe('cycle', () => {
    it('returns function that cycles indefinitelly', () => {
      const fn = cycle([1, 2, 3]);
      expect(fn()).to.eq(1);
      expect(fn()).to.eq(2);
      expect(fn()).to.eq(3);
      expect(fn()).to.eq(1);
    });
  });

  describe('setTitle', () => {
    it('sets document title', () => {
      setTitle('Test', 'Base');
      expect(document.title).to.eq('Test | Base');
    });

    it('sets to default title', () => {
      setTitle();
      expect(document.title).to.eq('Slava Pavlutin');
    });
  });
});
