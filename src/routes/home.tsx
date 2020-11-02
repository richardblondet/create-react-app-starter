import React, { useContext } from 'react';
import { ApplicationStore } from '../store/providers';
import logo from '../logo.svg';

const Home = (props:any) => {
  const { state } = useContext(ApplicationStore);
  // console.log("%c AppStore", "font-size:2em;", state);
  
  return (
    <div className="App">
      <header className="App-header updated">
        <img src={logo} height="auto" className="App-logo" alt="logo" />
        <p>
          <code>React JS Frontend Development. Version { state.version }</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build with React JS
        </a>
      </header>
    </div>
  );
}

export default Home;
