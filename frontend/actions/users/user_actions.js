import * as UserApiUtil from '../../util/users/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => {
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
    return UserApiUtil.fetchUser(userId)
      .then(user => dispatch(receiveUser(user)));
  };
};