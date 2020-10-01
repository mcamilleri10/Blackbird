import { connect } from 'react-redux';
import CompanySidebar from './company_sidebar';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  const company = state.entities.companies[ownProps.match.params.companyId];
  return {
    company,
    user,
    color: state.ui.color
  };
};

const mDTP = dispatch => {
  return {
    
  };
};

export default connect(mSTP, mDTP)(CompanySidebar);