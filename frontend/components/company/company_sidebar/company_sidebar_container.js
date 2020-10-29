import { connect } from 'react-redux';
import CompanySidebar from './company_sidebar';
import { updateUser } from '../../../actions/users/user_actions';
import { createShare, 
  deleteShare, 
  updateShare 
} from '../../../actions/shares/share_actions';
import { addCompanyToWatchlist } from '../../../actions/watchlists/watchlist_actions';

const mSTP = (state, ownProps) => {
  const symbol = ownProps.match.params.companyId;
  const user = state.entities.users[state.session.id];
  const company = state.entities.companies[symbol];
  const watchlists = state.entities.watchlists;
  return {
    company,
    user,
    color: state.ui.color,
    watchlists
  };
};

const mDTP = dispatch => {
  return {
    createShare: share => dispatch(createShare(share)),
    updateUser: user => dispatch(updateUser(user)),
    deleteShare: shareId => dispatch(deleteShare(shareId)),
    updateShare: share => dispatch(updateShare(share)),
    addCompanyToWatchlist: watchlist => dispatch(addCompanyToWatchlist(watchlist))
  };
};

export default connect(mSTP, mDTP)(CompanySidebar);