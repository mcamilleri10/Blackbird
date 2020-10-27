import { connect } from 'react-redux';
import WatchlistSidebar from './watchlist_sidebar';
import { createWatchlist } from '../../../actions/watchlists/watchlist_actions';

const mSTP = (state, ownProps) => {
  return {

  };
};

const mDTP = dispatch => {
  return {
    createWatchlist: watchlist => dispatch(createWatchlist(watchlist))
  };
};

export default connect(mSTP, mDTP)(WatchlistSidebar);