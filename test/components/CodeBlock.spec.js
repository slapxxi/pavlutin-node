import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import CodeBlock from '../../src/js/components/CodeBlock';
import { singleLine } from '../test-helper';

describe('<CodeBlock>', () => {
  const jsSnippet = "const test = 'test';";
  const cssSnippet = singleLine`
    h1 {
      color: red;
    }
  `;

  it('sets class matching language prop', () => {
    const result = shallow(<CodeBlock language="js" literal="" />);
    expect(result.find('pre.language-js').length).to.eq(1);
  });

  it('sets class to "text" if missing language', () => {
    const result = shallow(<CodeBlock literal="" />);
    expect(result.find('pre.language-text').length).to.eq(1);
  });

  it('converts js literal to language tokens', () => {
    const result = shallow(<CodeBlock language="js" literal={jsSnippet} />);
    const expected = singleLine`
      <pre class="language-js">
        <code class="language-js">
          <span class="token keyword">const</span> test <
          span class="token operator">=</span> <
          span class="token string">'test'</span>
          <span class="token punctuation">;</span>
        </code>
      </pre>
    `;
    expect(result.html()).to.eq(expected);
  });

  it('converts css literal to language tokens', () => {
    const result = shallow(<CodeBlock language="css" literal={cssSnippet} />);
    const expected = singleLine`
      <pre class="language-css">
        <code class="language-css">
          <span class="token selector">h1</span> <
          span class="token punctuation">{</span>
          <span class="token property">color</span>
          <span class="token punctuation">:</span> red
          <span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        </code>
      </pre>
    `;
    expect(result.html()).to.eq(expected);
  });
});
