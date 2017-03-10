import React from 'react';
import Header from './Header';
import Footer from './Footer';


// TODO: Markdown Support
// TODO: Persistent Session
// TODO: Authentication
function App({ children }) {
  return (
    <div className="app">
      <Header className="app__header" />

      <div className="app__content">
        { children }
      </div>

      <Footer className="app__footer" />
    </div>
  );
}

export default App;
