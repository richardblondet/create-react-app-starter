import React, { useContext } from 'react';
import { ApplicationStore } from '../store/providers';
import logo from '../logo.svg';
import { useIntl } from '../store/hooks';

const Home = () => {
  const { state } = useContext(ApplicationStore);
  const { locale, translate, updateLocale } = useIntl();
  // console.log("%c locale", "font-size:2em;", locale);
  
  return (
    <div className="App">
      <header className="App-header updated">
        <img src={logo} height="auto" className="App-logo" alt="logo" />
        <p>
          <code>
            { translate("app.getting.started", { key: "%VERSION%", value: state.version }) }
          </code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build with React JS
        </a>
        <p>
          <select onChange={(e) => updateLocale(e.target.value)} defaultValue={locale}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </p>
      </header>
    </div>
  );
}

export default Home;
