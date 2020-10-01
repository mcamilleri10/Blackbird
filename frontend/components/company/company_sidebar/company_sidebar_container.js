import { connect } from 'react-redux';
import CompanySidebar from './company_sidebar';
import { createShare } from '../../../actions/shares/share_actions';
import { updateUser } from '../../../actions/users/user_actions';

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
    createShare: share => dispatch(createShare(share)),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mSTP, mDTP)(CompanySidebar);