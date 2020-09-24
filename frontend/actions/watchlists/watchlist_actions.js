import * as WatchlistApiUtil from '../../util/watchlists/watchlists_api_util';

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';

const receiveWatchlist = watchlist => {
  return {
    type: RECEIVE_WATCHLIST,
    watchlist
  };
};

export const fetchWatchlist = watchlistId => {
  return dispatch => {
    return WatchlistApiUtil.fetchWatchlist(watchlistId)
      .then(watchlist => dispatch(receiveWatchlist(watchlist)));
  };
};