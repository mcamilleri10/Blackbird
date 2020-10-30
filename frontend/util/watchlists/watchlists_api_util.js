
export const fetchWatchlist = watchlistId => {
  return $.ajax({
    url: `/api/watchlists/${watchlistId}`
  });
};

export const createWatchlist = watchlist => {
  return $.ajax({
    url: `/api/users/${watchlist.user_id}/watchlists`,
    method: 'post',
    data: { watchlist }
  });
};

export const updateWatchlistName = watchlist => {
  // debugger
  return $.ajax({
    url: `/api/watchlists/${watchlist.id}`,
    method: 'patch',
    data: { watchlist }
  });
};

export const addCompanyToWatchlist = watchlist => {
  return $.ajax({
    url: `/api/watchlists/${watchlist.id}`,
    method: 'patch',
    data: { watchlist }
  });
};

export const removeCompanyFromWatchlist = (watchlist) => {
  return $.ajax({
    url: `/api/watchlists/${watchlist.id}`,
    method: 'patch',
    data: { watchlist }
  });
};