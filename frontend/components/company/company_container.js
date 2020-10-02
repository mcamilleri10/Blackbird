import { connect } from 'react-redux';
import Company from './company';
import { 
  requestQuote, 
  requestHistoricalPrices,
  requestCompanyInfo,
  saveCompany
} from '../../actions/companies/company_actions';
import { receiveColor } from '../../actions/ui/ui_actions';
import { formatDateStr } from '../../util/chart/chart_util';

const mSTP = (state, ownProps) => {
  const company = state.entities.companies[ownProps.match.params.companyId];
  const user = state.entities.users[state.session.id];

  return {
    user: user,
    company: company,
    color: state.ui.color,
    loading: state.ui.loading,
    formatDateStr
  };
};

const mDTP = dispatch => {
  return {
    requestQuote: symbol => dispatch(requestQuote(symbol)),
    requestHistoricalPrices: (symbol, range) => dispatch(requestHistoricalPrices(symbol, range)),
    requestCompanyInfo: symbol => dispatch(requestCompanyInfo(symbol)),
    saveCompany: symbol => dispatch(saveCompany(symbol)),
    receiveColor: color => dispatch(receiveColor(color))
  };
};

export default connect(mSTP, mDTP)(Company);