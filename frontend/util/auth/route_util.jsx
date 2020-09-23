import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const mSTP = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const Auth = props => {
  const { path, loggedIn, component: Component } = props;
  return (
    <Route
      path={path}
      render={props =>
        // CHANGE REDIRECT TO DASHBOARD PAGE
        loggedIn ? <Redirect to='/'/> : <Component {...props}/>
      }
    />
  );
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));