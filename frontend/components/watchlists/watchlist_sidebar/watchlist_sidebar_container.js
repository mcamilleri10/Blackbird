import { connect } from 'react-redux';
import WatchlistSidebar from './watchlist_sidebar';
import { 
  createWatchlist,
  addCompanyToWatchlist,
  removeCompanyFromWatchlist
} from '../../../actions/watchlists/watchlist_actions';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return {
    user,
    watchlists: Object.values(state.entities.watchlists),
    quotes: state.entities.companies,
    loading: state.ui.loading,
    color: state.ui.color
  };
};

const mDTP = dispatch => {
  return {
    createWatchlist: watchlist => dispatch(createWatchlist(watchlist))
  };
};

export default connect(mSTP, mDTP)(WatchlistSidebar);