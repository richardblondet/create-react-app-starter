import React from 'react';
import { ErrorBoundary } from './components/Errors';
import Routes from './routes';
import { ApplicationStoreProvider, IntlStoreProvider } from './store/providers';
import { composeComponent, getTheme } from './store/utils';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './App.styles';

/**
 * Application
 * 
 * Towards @version 1.0.0
 */
// const System: React.FC<{}> = ({ children }) => {
  // const theme = getTheme('preset');
  
  // console.log('theme', theme);
  // return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  // };
  
const theme = getTheme('preset');
/** 
 * Compose Providers 
 * 
 * If your application needs another provider at Root level
 * you can add it here. You can also add providers down the
 * nest, just where you need it to.
 * */
const ComposedProviders = composeComponent([
  props => <ApplicationStoreProvider {...props} />,
  props => <IntlStoreProvider {...props} />,
  props => <ThemeProvider theme={theme} {...props} />,
  props => <ErrorBoundary {...props} />,
]);

const { Fragment } = React;

const App = () => {
  return (
    <ComposedProviders>
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </ComposedProviders>
  );
}

export default App;
