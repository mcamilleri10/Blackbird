// import { connect } from 'react-redux';
// import DashboardChart from './dashboard_chart';
// import { logout } from '../../actions/session/session_actions';
// import { fetchShare } from '../../actions/shares/share_actions';
// import { fetchUser } from '../../actions/users/user_actions';
// import { fetchWatchlist } from '../../actions/watchlists/watchlist_actions';
// import {
//   requestQuote,
//   requestQuotes,
//   requestBatchIntradayPrices
// } from '../../actions/companies/company_actions';

// const mSTP = (state, ownProps) => {
//   const user = state.entities.users[ownProps.match.params.userId];
//   return {
//     user: user
//   };
// };

// const mDTP = dispatch => {
//   return {
//     logout: () => dispatch(logout()),
//     fetchShare: (shareId) => dispatch(fetchShare(shareId)),
//     fetchUser: (userId) => dispatch(fetchUser(userId)),
//     fetchWatchlist: (watchlistId) => dispatch(fetchWatchlist(watchlistId)),
//     requestQuote: (symbol) => dispatch(requestQuote(symbol)),
//     requestQuotes: (symbols) => dispatch(requestQuotes(symbols)),
//     requestBatchIntradayPrices: symbols => dispatch(requestBatchIntradayPrices(symbols))
//   };
// };

// export default connect(mSTP, mDTP)(DashboardChart);