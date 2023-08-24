import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './components/views/Login';
import Dashboard from './components/views/Dashboard';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const routes = ({ isAuthenticated, setIsAuthenticated }) => (
  <Switch>
    <Route path="/login">
      <Login setIsAuthenticated={setIsAuthenticated} />
    </Route>
    <ProtectedRoute
      path="/dashboard"
      component={Dashboard}
      isAuthenticated={isAuthenticated}
    />
  </Switch>
);

export default routes;

