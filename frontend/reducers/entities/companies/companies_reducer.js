import { 
  RECEIVE_QUOTE, RECEIVE_COMPANY
} from '../../../actions/companies/company_actions';


const companiesReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_QUOTE:
      debugger
      const quote = { [action.quote.symbol]: action.quote };
      const info = Object.assign({})
    case RECEIVE_COMPANY:
      // debugger
      const company = { [action.company.symbol]: action.company };
      return Object.assign({}, newState, company);
    default:
      return state;
  }
};

export default companiesReducer;