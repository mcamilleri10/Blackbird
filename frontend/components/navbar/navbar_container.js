import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import Navbar from './navbar';

const mSTP = (state, ownProps) => {
  return {
    
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Navbar);