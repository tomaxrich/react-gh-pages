import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Currently Under Development
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className="tech1"><a id="One">Currently Implemented Technology</a></div>
        <div className="tech2"><a id="Two">Github.io</a></div>
        <div className="tech3"><a id="Three">React.js</a></div>
        <div className="tech4"><a id="Four">Node.js</a></div>
        <div className="tech5"><a id="Five">GoDaddy.com</a></div>
      </body>
    </div>
  );
}

export default App;