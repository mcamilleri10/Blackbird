import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing imports
import { login, logout, signup } from './actions/session/session_actions';
import { requestQuote, fetchCompany, requestIntradayPrices } from './actions/companies/company_actions';
import { requestCompanyInfo } from './util/iex/iex_api_util';
import { fetchShare } from './actions/shares/share_actions';
import { fetchWatchlist } from './actions/watchlists/watchlist_actions';
import { fetchUser } from './actions/users/user_actions';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { 
          [window.currentUser.id]: window.currentUser 
        }
      },
      session: {
        id: currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // REMOVE AFTER TESTING 
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.requestQuote = requestQuote;
  window.fetchCompany = fetchCompany;
  // window.symbolSearch = symbolSearch;
  window.requestCompanyInfo = requestCompanyInfo;
  window.requestIntradayPrices = requestIntradayPrices;
  window.fetchWatchlist = fetchWatchlist;
  window.fetchUser = fetchUser;
  window.fetchShare = fetchShare;

  ReactDOM.render(<Root store={store}/>, root);
});