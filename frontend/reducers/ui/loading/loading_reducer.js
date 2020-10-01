import { START_LOADING, 
  RECEIVE_QUOTES, 
  RECEIVE_HISTORICAL_PRICES,
  RECEIVE_BATCH_HISTORICAL_PRICES
} from '../../../actions/companies/company_actions';
import { RECEIVE_USER } from '../../../actions/users/user_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case START_LOADING:
      return true;
    case RECEIVE_QUOTES:
      return false;
    case RECEIVE_HISTORICAL_PRICES:
      return false;
    case RECEIVE_BATCH_HISTORICAL_PRICES:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;