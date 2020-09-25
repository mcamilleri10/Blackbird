import { RECEIVE_WATCHLIST } from '../../../actions/watchlists/watchlist_actions';
import { RECEIVE_USER } from '../../../actions/users/user_actions';

const watchlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      newState[action.watchlist.id] = action.watchlist;
      return newState;
    case RECEIVE_USER:
      // debugger
      return action.watchlists;




    default:
      return state;
  }
};

export default watchlistsReducer;