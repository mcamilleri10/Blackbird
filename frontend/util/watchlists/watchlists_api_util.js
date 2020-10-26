
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