import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session/session_actions';
import { fetchShare } from '../../actions/shares/share_actions';
import { fetchUser, updateUser } from '../../actions/users/user_actions';
import { fetchWatchlist } from '../../actions/watchlists/watchlist_actions';
import { receiveColor } from '../../actions/ui/ui_actions';
import { formatDateStr } from '../../util/chart/chart_util';
import { 
  requestQuote, 
  requestQuotes,
  requestBatchHistoricalPrices,
  startLoading
 } from '../../actions/companies/company_actions';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    user,
    availableFunds: user.availableFunds,
    shares: Object.values(state.entities.shares),
    watchlists: Object.values(state.entities.watchlists),
    quotes: Object.values(state.entities.companies),
    color: state.ui.color,
    loading: state.ui.loading,
    formatDateStr
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchShare: (shareId) => dispatch(fetchShare(shareId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchWatchlist: (watchlistId) => dispatch(fetchWatchlist(watchlistId)),
    requestQuote: (symbol) => dispatch(requestQuote(symbol)),
    requestQuotes: (symbols) => dispatch(requestQuotes(symbols)),
    requestBatchHistoricalPrices: (symbols, range) => dispatch(requestBatchHistoricalPrices(symbols, range)),
    startLoading: () => dispatch(startLoading()),
    updateUser: user => dispatch(updateUser(user)),
    receiveColor: color => dispatch(receiveColor(color))
  };
};

export default connect(mSTP, mDTP)(Dashboard);