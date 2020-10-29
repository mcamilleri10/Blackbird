
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

export const updateWatchlistName = (watchlistId, name) => {
  return $.ajax({
    url: `/api/watchlists/${watchlistId}`,
    method: 'patch',
    data: { name }
  });
};

export const addCompanyToWatchlist = (watchlistId, companyId) => {
  return $.ajax({
    url: `/api/watchlists/${watchlistId}`,
    method: 'patch',
    data: { companyId }
  });
};

export const removeCompanyFromWatchlist = (watchlistId, companyId) => {
  return $.ajax({
    url: `/api/watchlists/${watchlistId}`,
    method: 'patch',
    data: { companyId }
  });
};