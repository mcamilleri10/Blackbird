import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const mSTP = state => {
  return {
    loggedIn: Boolean(state.session.id),
    userId: state.session.id
  };
};

const Auth = props => {
  const { userId, path, loggedIn, component: Component } = props;
  return (
    <Route
      path={path}
      render={props =>
        loggedIn ? <Redirect to={`/auth/users/${userId}`}/> : <Component {...props}/>
      }
    />
  );
};

const Protected = props => {
  const { loggedIn, path, component: Component } = props;
  return (
    <Route
      path={path}
      render={props => (
        loggedIn ? <Component {...props}/> : <Redirect to='/'/>
      )}
    />
  );
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));