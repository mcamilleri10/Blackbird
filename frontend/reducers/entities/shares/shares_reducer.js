import { RECEIVE_SHARE } from '../../../actions/shares/share_actions';
import { RECEIVE_USER } from '../../../actions/users/user_actions';

const sharesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SHARE:
      newState[action.share.id] = action.share;
      return newState;
    case RECEIVE_USER:
      return action.shares;
    default:
      return state;
  }
};

export default sharesReducer;