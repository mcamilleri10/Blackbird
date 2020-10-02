import { connect } from 'react-redux';
import CompanySidebar from './company_sidebar';
import { updateUser } from '../../../actions/users/user_actions';
import { createShare, 
  deleteShare, 
  updateShare 
} from '../../../actions/shares/share_actions';

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
    deleteShare: shareId => dispatch(deleteShare(shareId)),
    updateShare: share => dispatch(updateShare(share))
  };
};

export default connect(mSTP, mDTP)(CompanySidebar);