import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { symbolSearch } from '../../actions/search/search_actions';
import Navbar from './navbar';

const mSTP = (state, ownProps) => {
  return {
    // searchResults: state.entities.searchResults
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    symbolSearch: fragment => dispatch(symbolSearch(fragment))
  };
};

export default connect(mSTP, mDTP)(Navbar);