import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Splash from '../components/splash/splash';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';


const App = () => {
  return (
    <div>
      <Route exact path='/' component={Splash}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
    </div>
  );
};

export default App;