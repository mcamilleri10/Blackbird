import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session/session_actions';
import { fetchShare } from '../../actions/shares/share_actions';
import { fetchUser } from '../../actions/users/user_actions';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    user: user,
    shares: user.sharesOwned
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchShare: (shareId) => dispatch(fetchShare(shareId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(Dashboard);