import { combineReducers } from 'redux';
import companiesReducer from './companies/companies_reducer';
import userReducer from './users/users_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  companies: companiesReducer
});

export default entitiesReducer;