import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session/session_actions';
import { fetchShare } from '../../actions/shares/share_actions';
import { fetchUser } from '../../actions/users/user_actions';
import { fetchWatchlist } from '../../actions/watchlists/watchlist_actions';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    user: user,
    shares: user.sharesOwned,
    watchlists: user.watchlistIds
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchShare: (shareId) => dispatch(fetchShare(shareId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchWatchlist: (watchlistId) => dispatch(fetchWatchlist(watchlistId))
  };
};

export default connect(mSTP, mDTP)(Dashboard);