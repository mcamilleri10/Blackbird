import { connect } from 'react-redux';
import CompanySidebar from './company_sidebar';
import { createShare, deleteShare } from '../../../actions/shares/share_actions';
import { updateUser } from '../../../actions/users/user_actions';

const mSTP = (state, ownProps) => {
  const symbol = ownProps.match.params.companyId;
  const user = state.entities.users[state.session.id];
  const company = state.entities.companies[symbol];
  return {
    company,
    user,
    color: state.ui.color
  };
};

const mDTP = dispatch => {
  return {
    createShare: share => dispatch(createShare(share)),
    updateUser: user => dispatch(updateUser(user)),
    deleteShare: shareId => dispatch(deleteShare(shareId))
  };
};

export default connect(mSTP, mDTP)(CompanySidebar);