import React from 'react';
import { Route } from 'react-router-dom';
import Splash from '../components/splash/splash';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Splash}/>
      <Route exact path='/signup' component={SignupFormContainer}/>
      <Route exact path='/login' component={LoginFormContainer}/>
    </div>
  );
};

export default App;