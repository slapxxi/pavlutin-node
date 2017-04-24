import React from 'react';
import { shallow } from 'enzyme';
import CodeBlock from './CodeBlock';
import { singleLine } from '../../../test/test-helper';

const jsSnippet = "const test = 'test';";
const cssSnippet = singleLine`
  h1 {
    color: red;
  }
`;

it('renders', () => {
  const wrapper = shallow(<CodeBlock />);
  expect(wrapper.length).toBe(1);
});

it('sets class matching language prop', () => {
  const wrapper = shallow(<CodeBlock language="js" literal="" />);
  expect(wrapper.find('pre.language-js').length).toBe(1);
});

it('sets class to "text" if missing language', () => {
  const wrapper = shallow(<CodeBlock literal="" />);
  expect(wrapper.find('pre.language-text').length).toBe(1);
});

it('converts js literal to language tokens', () => {
  const wrapper = shallow(<CodeBlock language="js" literal={jsSnippet} />);
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
  expect(wrapper.html()).toContain(expected);
});

it('converts css literal to language tokens', () => {
  const wrapper = shallow(<CodeBlock language="css" literal={cssSnippet} />);
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
  expect(wrapper.html()).toContain(expected);
});
