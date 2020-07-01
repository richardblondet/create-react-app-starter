import React, { useContext } from 'react';
import { RootStore } from '../store/providers';
import logo from '../logo.svg';

const Home = (props:any) => {
  const rootContext = useContext(RootStore);

  // console.log("%c props", "font-size:2em;", props);
  // console.log("%c rootContext", "font-size:2em;", rootContext);
  
  return (
    <div className="App">
      <header className="App-header updated">
        <img src={logo} height="auto" className="App-logo" alt="logo" />
        <p>
          <code>React JS Frontend Development</code>
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
