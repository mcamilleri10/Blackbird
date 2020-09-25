import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session/session_actions';
import { fetchShare } from '../../actions/shares/share_actions';
import { fetchUser } from '../../actions/users/user_actions';
import { fetchWatchlist } from '../../actions/watchlists/watchlist_actions';
import { requestQuote } from '../../actions/companies/company_actions';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    user: user,
    shares: Object.values(state.entities.shares),
    watchlistIds: user.watchlistIds,
    watchlists: Object.values(state.entities.watchlists)
    // companies: Object.values(state.entities.companies)
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchShare: (shareId) => dispatch(fetchShare(shareId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchWatchlist: (watchlistId) => dispatch(fetchWatchlist(watchlistId)),
    requestQuote: (symbol) => dispatch(requestQuote(symbol))
  };
};

export default connect(mSTP, mDTP)(Dashboard);