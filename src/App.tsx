import React from 'react';
import { ErrorBoundary } from './components/Errors';
import Routes from './routes';
import './App.css';

/**
 * Application
 * 
 * Towards version 1.0.0
 * 
 * @todo 
  - Routing
  - Internationalization
  - Storybook
  - Theming
  - 
 */
const App = () => {
  // return <div>hello world. starting with providers</div>;

  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
