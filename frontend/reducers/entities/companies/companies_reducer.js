import { 
  RECEIVE_QUOTE, RECEIVE_COMPANY
} from '../../../actions/companies/company_actions';

let id = 1;
const companiesReducer = (state = {}, action) => {
  id++;
  // debugger
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    // case RECEIVE_QUOTE:
    //   const newQuote = { [action.quote.id]: action.quote };
    //   return Object.assign({}, newState, newQuote);
    case RECEIVE_COMPANY:
      debugger
      const company = { [id]: action.company };
      return Object.assign({}, newState, company);
    default:
      return state;
  }
};

export default companiesReducer;