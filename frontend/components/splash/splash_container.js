import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Splash from './splash';

const mSTP = state => {
  return {
    errors: state.errors.session
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()) // REMOVE AFTER AUTH REVIEW
  };
};

export default connect(mSTP, mDTP)(Splash);