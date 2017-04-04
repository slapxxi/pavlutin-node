import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
