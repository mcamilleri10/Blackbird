import { 
  RECEIVE_QUOTE, RECEIVE_COMPANY
} from '../../../actions/companies/company_actions';


const companiesReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_QUOTE:
      const quote = action.quote;
      const merged = Object.assign({}, newState[quote.symbol], quote); // merge company info and company quote
      return Object.assign({}, { [quote.symbol]: merged });
    case RECEIVE_COMPANY:
      const company = { [action.company.symbol]: action.company };
      return Object.assign({}, newState, company);
    default:
      return state;
  }
};

export default companiesReducer;