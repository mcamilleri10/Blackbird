import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session/session_actions';

const mSTP = (state, ownProps) => {
  return {
    
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Dashboard);