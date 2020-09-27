import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth/route_util';
import SplashContainer from '../components/splash/splash_container';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import DashboardSidebarContainer from '../components/dashboard/dashboard_sidebar/dashboard_sidebar_container';
import NavbarContainer from '../components/navbar/navbar_container';
import CompanyContainer from './companies/company_container';
import WatchlistContainer from './watchlists/watchlist_container';


const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/' component={SplashContainer}/>
      </Switch>
      <ProtectedRoute path='/auth' component={NavbarContainer}/>
      <div className='dashboard-body'>
        <div className='dashboard'>
          <ProtectedRoute path='/auth/users/:userId' component={DashboardContainer}/>
          <ProtectedRoute path='/auth/users/:userId' component={DashboardSidebarContainer}/>
        </div>
      </div>
      <ProtectedRoute path='/auth/companies/:companyId' component={CompanyContainer}/>
      <ProtectedRoute path='/auth/watchlists/:watchlistId' component={WatchlistContainer}/>
    </div>
  );
};

export default App;
