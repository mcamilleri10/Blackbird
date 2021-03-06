import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth/route_util';
import SplashContainer from '../components/splash/splash_container';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import DashboardSidebarContainer from '../components/dashboard/dashboard_sidebar/dashboard_sidebar_container';
import NavbarContainer from '../components/navbar/navbar_container';
import CompanyContainer from './company/company_container';
import CompanySidebarContainer from './company/company_sidebar/company_sidebar_container';
import WatchlistContainer from './watchlists/watchlist_container';
import WatchlistSidebarContainer from './watchlists/watchlist_sidebar/watchlist_sidebar_container';


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
      <div className='company-body'>
        <div className='company'>
          <ProtectedRoute path='/auth/companies/:companyId' component={CompanyContainer}/>
          <ProtectedRoute path='/auth/companies/:companyId' component={CompanySidebarContainer}/>
        </div>
      </div>
      <div className='watchlist-body'>
        <div className='watchlist'>
          <ProtectedRoute path='/auth/watchlists/:watchlistId' component={WatchlistContainer}/>
          <ProtectedRoute path='/auth/watchlists/:watchlistId' component={WatchlistSidebarContainer}/>
        </div>
      </div>
    </div>
  );
};

export default App;
