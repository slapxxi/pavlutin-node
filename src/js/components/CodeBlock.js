import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';

function CodeBlock(props) {
  const { language, literal } = props;
  const clsName = `language-${language || 'text'}`;
  let parsingLanguage;
  let markup;
  if (language === 'js') {
    parsingLanguage = Prism.languages.javascript;
  }
  if (language === 'css') {
    parsingLanguage = Prism.languages.css;
  }
  if (language === 'html') {
    parsingLanguage = Prism.languages.html;
  }
  if (language === 'jsx') {
    parsingLanguage = Prism.languages.jsx;
  }
  if (parsingLanguage) {
    markup = { __html: Prism.highlight(literal, parsingLanguage) };
    return (
      <div className="codeblock">
        <pre className={clsName}>
          <code
            className={clsName}
            dangerouslySetInnerHTML={markup}
          />
        </pre>
        <div className="codeblock__nav">
          { language }
        </div>
      </div>
    );
  }
  return (
    <div className="codeblock">
      <pre className={clsName}>
        <code className={clsName}>
          { literal }
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;
