import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/auth/route_util';
import SplashContainer from '../components/splash/splash_container';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import Portfolio from '../components/portfolio/portfolio';


const App = () => {
  return (
    <div>
      <Route exact path='/' component={SplashContainer}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <Route path='/auth/users/:userId' component={Portfolio}/>
    </div>
  );
};

export default App;