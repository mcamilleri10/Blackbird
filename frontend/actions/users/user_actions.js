import * as UserApiUtil from '../../util/users/users_api_util';
import { startLoading } from '../../actions/companies/company_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => {
  // debugger
  return {
    type: RECEIVE_USER,
    user,
    shares: user.shares,
    watchlists: user.watchlists,
    companies: user.companies
  };
};

export const fetchUser = userId => {
  return dispatch => {
    // dispatch(startLoading());
    return UserApiUtil.fetchUser(userId)
      .then(user => dispatch(receiveUser(user)));
  };
};

export const updateUser = user => {
  return dispatch => {
    return UserApiUtil.updateUser(user)
      .then(user => dispatch(receiveUser(user)));
  };
};