import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { 
  fetchWatchlist, 
  removeCompanyFromWatchlist,
  updateWatchlistName
} from '../../actions/watchlists/watchlist_actions';
import { requestQuotes } from '../../actions/companies/company_actions';
import { receiveColor } from '../../actions/ui/ui_actions';

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
    receiveColor: color => dispatch(receiveColor(color)),
    fetchWatchlist: watchlistId => dispatch(fetchWatchlist(watchlistId)),
    requestQuotes: symbols => dispatch(requestQuotes(symbols)),
    removeCompanyFromWatchlist: (watchlistId, companyId) => dispatch(removeCompanyFromWatchlist(watchlistId, companyId)),
    updateWatchlistName: (watchlistId, name) => dispatch(updateWatchlistName(watchlistId, name))
  };
};

export default connect(mSTP, mDTP)(Watchlist);