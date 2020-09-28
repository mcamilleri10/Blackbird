import { connect } from 'react-redux';
import DashboardSidebar from './dashboard_sidebar';
import { fetchUser } from '../../../actions/users/user_actions';
import { createWatchlist } from '../../../actions/watchlists/watchlist_actions';

const mSTP = (state, ownProps) => {
  // debugger
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    user: user,
    shares: Object.values(state.entities.shares),
    watchlists: Object.values(state.entities.watchlists),
    quotes: state.entities.companies,
    loading: state.ui.loading
  };
};

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createWatchlist: watchlist => dispatch(createWatchlist(watchlist))
  };
};

export default connect(mSTP, mDTP)(DashboardSidebar);