import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Loading } from '../components/Loaders';
import { PrivateRoute } from '../components/Utils';

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
const Profile = lazy(() => import('./profile'));
const Auth = lazy(() => import('./auth'));
const Page404 = lazy(() => import('./404'));
const Page403 = lazy(() => import('./403'));

/** Routes Component */
const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        
        {/* Private Routes */}
        <PrivateRoute path="/me" component={Profile} isAuthenticated={true} />
        
        {/* "Utility" routes */}
        <Route path="/auth" component={Auth} />
        <Route path="/403" component={Page403} />
        <Route component={Page404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;