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
        <div className="tech1"><a id="One" >Currently Implemented Technology</a></div>
        <div className="tech2"><a id="Two" href="https://pages.github.com/">Github.io</a></div>
        <div className="tech3"><a id="Three" href="https://reactjs.org/">React.js</a></div>
        <div className="tech4"><a id="Four" href="https://nodejs.org/en/">Node.js</a></div>
        <div className="tech5"><a id="Five" href="https://ca.godaddy.com/">GoDaddy.com</a></div>
      </body>
    </div>
  );
}

export default App;
