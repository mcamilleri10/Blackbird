import { RECEIVE_CURRENT_USER } from '../../../actions/session/session_actions';
import { RECEIVE_USER } from '../../../actions/users/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newUser = { [action.currentUser.id]: action.currentUser };
      return Object.assign({}, newState, newUser);
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;