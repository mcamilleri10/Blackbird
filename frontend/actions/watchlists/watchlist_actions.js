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

export const createWatchlist = watchlist => {
  return dispatch => {
    return WatchlistApiUtil.createWatchlist(watchlist)
      .then(watchlist => dispatch(receiveWatchlist(watchlist)));
  };
};

export const updateWatchlistName = (watchlistId, name) => {
  return dispatch => {
    return WatchlistApiUtil.updateWatchlistName(watchlistId, name)
      .then(watchlist => dispatch(receiveWatchlist(watchlist)));
  };
};

export const addCompanyToWatchlist = (watchlistId, companyId) => {
  return dispatch => {
    return WatchlistApiUtil.addCompanyToWatchlist(watchlistId, companyId)
      .then(watchlist => dispatch(receiveWatchlist(watchlist)));
  };
};

export const removeCompanyFromWatchlist = (watchlist) => {
  // debugger
  return dispatch => {
    return WatchlistApiUtil.removeCompanyFromWatchlist(watchlist)
      .then(watchlist => dispatch(receiveWatchlist(watchlist)));
  };
};