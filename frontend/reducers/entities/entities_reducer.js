import { combineReducers } from 'redux';
import companiesReducer from './companies/companies_reducer';
import userReducer from './users/users_reducer';
import sharesReducer from './shares/shares_reducer';
import watchlistsReducer from './watchlists/watchlists_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  companies: companiesReducer,
  shares: sharesReducer,
  watchlists: watchlistsReducer
});

export default entitiesReducer;