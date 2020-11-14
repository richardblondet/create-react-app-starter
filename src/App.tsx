import React from 'react';
import { ErrorBoundary } from './components/Errors';
import Routes from './routes';
import './App.css';
import { ApplicationStoreProvider, IntlStoreProvider } from './store/providers';
import { composeComponent } from './store/utils';

/**
 * Application
 * 
 * Towards @version 1.0.0
 */

/** 
 * Compose Providers 
 * 
 * If your application needs another provider at Root level
 * you can add it here. You can also add providers down the
 * nest, just where you need it to.
 * */
const ComposedProviders = composeComponent([
  props => <ErrorBoundary {...props} />, /* Error at top level to be able to catch'em all */
  props => <ApplicationStoreProvider {...props} />,
  props => <IntlStoreProvider {...props} />
]);

const App = () => {

  return (
    <ComposedProviders>
      <Routes />
    </ComposedProviders>
  );
}

export default App;
