import { connect } from 'react-redux';
import Company from './company';
import { requestQuote } from '../../actions/companies/company_actions';

const mSTP = (state, ownProps) => {
  const company = state.entities.companies[ownProps.match.params.companyId];
  const user = state.entities.users[state.session.id];
  return {
    user: user,
    company: company
    
  };
};

const mDTP = dispatch => {
  return {
    requestQuote: symbol => dispatch(requestQuote(symbol))
  };
};

export default connect(mSTP, mDTP)(Company);