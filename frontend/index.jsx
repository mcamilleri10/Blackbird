import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing imports
import { login, logout, signup } from './actions/session/session_actions';
import { fetchQuote, fetchCompany } from './actions/companies/company_actions';
import { fetchCompanyInfo } from './util/iex/iex_api_util';



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

  window.fetchQuote = fetchQuote;
  window.fetchCompany = fetchCompany;
  // window.symbolSearch = symbolSearch;
  window.fetchCompanyInfo = fetchCompanyInfo;

  ReactDOM.render(<Root store={store}/>, root);
});