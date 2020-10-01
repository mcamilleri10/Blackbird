import { RECEIVE_SHARE } from '../../../actions/shares/share_actions';
import { RECEIVE_USER } from '../../../actions/users/user_actions';
import { LOGOUT_CURRENT_USER } from '../../../actions/session/session_actions';

const sharesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SHARE:
      newState[action.share.companyId] = action.share;
      return newState;
    case RECEIVE_USER:
      Object.values(action.shares).forEach(share => {
        newState[share.companyId] = share;
      });
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default sharesReducer;