import { connect } from 'react-redux';
import Company from './company';
import { 
  requestQuote, 
  requestHistoricalPrices,
  requestCompanyInfo,
  saveCompany
} from '../../actions/companies/company_actions';

const mSTP = (state, ownProps) => {
  const company = state.entities.companies[ownProps.match.params.companyId];
  const user = state.entities.users[state.session.id];
  // debugger
  return {
    user: user,
    company: company
    
  };
};

const mDTP = dispatch => {
  return {
    requestQuote: symbol => dispatch(requestQuote(symbol)),
    requestHistoricalPrices: (symbol, range) => dispatch(requestHistoricalPrices(symbol, range)),
    requestCompanyInfo: symbol => dispatch(requestCompanyInfo(symbol)),
    saveCompany: symbol => dispatch(saveCompany(symbol))
  };
};

export default connect(mSTP, mDTP)(Company);