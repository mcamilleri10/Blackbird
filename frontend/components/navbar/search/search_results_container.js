import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResults from './search_results';

const mSTP = (state, ownProps) => {
  return {
    
  };
};

const mDTP = dispatch => {
  return {
    
  };
};

export default withRouter(connect(mSTP, mDTP)(SearchResults));