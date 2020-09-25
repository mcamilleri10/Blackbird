import { 
  RECEIVE_QUOTE, RECEIVE_COMPANY, RECEIVE_INTRADAY_PRICES
} from '../../../actions/companies/company_actions';
import { RECEIVE_USER } from '../../../actions/users/user_actions';


const companiesReducer = (state = {}, action) => {
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
    case RECEIVE_INTRADAY_PRICES:
      newState[action.symbol].intradayPrices = action.prices;
      return newState; 
    // case RECEIVE_USER:
    //   const { companies } = action;
    //   const newCompanies = {};
    //   Object.values(companies).forEach(company => {
    //     newCompanies[company.symbol] = company;
    //   });
    //   debugger
    //   return Object.assign({}, newState, newCompanies);
    default:
      return state;
  }
};

export default companiesReducer;