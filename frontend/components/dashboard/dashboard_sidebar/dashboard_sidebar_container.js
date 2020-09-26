import { connect } from 'react-redux';
import DashboardSidebar from './dashboard_sidebar';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    user: user,
    shares: Object.values(state.entities.shares),
    watchlists: Object.values(state.entities.watchlists),
    quotes: Object.values(state.entities.companies)
  };
};

const mDTP = dispatch => {
  return {
    PROP: () => dispatch(FUNCTION)
  };
};