import React from 'react';
import { Route } from 'react-router-dom';
import Splash from '../components/splash/splash';
import SignupForm from '../components/session/signup_form';
import LoginForm from '../components/session/login_form';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Splash}/>
      <Route exact path='/signup' component={SignupForm}/>
      <Route exact path='/login' component={LoginForm}/>
    </div>
  );
};

export default App;