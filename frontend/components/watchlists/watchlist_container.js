import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { fetchWatchlist } from '../../actions/watchlists/watchlist_actions';
import { requestQuotes } from '../../actions/companies/company_actions';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  const watchlist = state.entities.watchlists[ownProps.match.params.watchlistId];
  return {
    user,
    watchlist,
    quotes: Object.values(state.entities.companies)
  };
};

const mDTP = dispatch => {
  return {
    fetchWatchlist: watchlistId => dispatch(fetchWatchlist(watchlistId)),
    requestQuotes: symbols => dispatch(requestQuotes(symbols))
  };
};

export default connect(mSTP, mDTP)(Watchlist);