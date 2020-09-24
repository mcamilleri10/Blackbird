import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth/route_util';
import SplashContainer from '../components/splash/splash_container';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import DashboardContainer from '../components/dashboard/dashboard_container';


const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/' component={SplashContainer}/>
      </Switch>
      <ProtectedRoute path='/auth/users/:userId' component={DashboardContainer}/>
    </div>
  );
};

export default App;