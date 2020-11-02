import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/**
 * Routes
 * 
 * Our routes represent the view part of our application.
 * Every route contains a set of components that constitutes 
 * the view.
 * 
 * +------------+
 * | Navigation |
 * +============+
 * |            |
 * |            |
 * |    View    | <--- Routes 
 * |            |
 * |            |
 * +------------+
 */

const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Page404 = lazy(() => import('./404'));

/** Routes Component */
const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={Page404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;