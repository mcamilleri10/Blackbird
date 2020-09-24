import { RECEIVE_SHARE } from '../../../actions/shares/share_actions';

const sharesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SHARE:
      newState[action.share.id] = action.share;
      return newState;
    default:
      return state;
  }
};

export default sharesReducer;