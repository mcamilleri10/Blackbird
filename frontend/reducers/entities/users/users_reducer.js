import { RECEIVE_CURRENT_USER } from '../../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newUser = { [action.currentUser.id]: action.currentUser };
      return Object.assign({}, newState, newUser);
    default:
      return state;
  }
};

export default usersReducer;