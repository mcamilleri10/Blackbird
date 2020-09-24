
export const fetchWatchlist = watchlistId => {
  return $.ajax({
    url: `/api/watchlists/${watchlistId}`
  });
};