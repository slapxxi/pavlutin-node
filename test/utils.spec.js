import {
  combineClassNames,
  currentYear,
  cycle,
  setTitle,
} from '../src/js/utils';

describe('combineClassNames', () => {
  it('combines class names', () => {
    const result = combineClassNames('nav', 'active');
    expect(result).toBe('nav active');
  });

  it('ignores undefined values', () => {
    const result = combineClassNames(undefined, 'active');
    expect(result).toBe('active');
  });

  it('ignores empty strings', () => {
    const result = combineClassNames('', 'active');
    expect(result).toBe('active');
  });
});

describe('currentYear', () => {
  it('returns current year', () => {
    const result = currentYear();
    expect(result).toBe(2017);
  });
});

describe('cycle', () => {
  it('returns function that cycles indefinitelly', () => {
    const fn = cycle([1, 2, 3]);
    expect(fn()).toBe(1);
    expect(fn()).toBe(2);
    expect(fn()).toBe(3);
    expect(fn()).toBe(1);
  });
});

describe('setTitle', () => {
  it('sets document title', () => {
    setTitle('Test', 'Base');
    expect(document.title).toBe('Test | Base');
  });

  it('sets to default title', () => {
    setTitle();
    expect(document.title).toBe('Slava Pavlutin');
  });
});
