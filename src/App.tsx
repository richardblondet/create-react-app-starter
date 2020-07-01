import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import errorBoundaryHOC, { Props as ErrorBoundaryProps } from './utils/errorBoundaryHOC';
import { RootStoreProvider } from './store/providers';
import { Reducer } from './store/reducer';

import './App.css';

const Home = lazy(() => import('./routes/home'));

/**
 * ErrorBundary 
 * @status rc
 */
const ErrorBoundary = errorBoundaryHOC((props: ErrorBoundaryProps) => {
  if (props.error) {
   return (
    <div className="error-screen">
      <h2>An error has occured</h2>
      <h4>{props.error.message}</h4>
    </div>
   );
  }

  return <React.Fragment>{props.children}</React.Fragment>;
});

const App = () => {
  const state = {
    foo: 'bar'
  };

  return (
    <ErrorBoundary>
      <RootStoreProvider reducer={Reducer} initialState={state}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </Suspense>
        </Router>
      </RootStoreProvider>
    </ErrorBoundary>
  );
}
export default App;
