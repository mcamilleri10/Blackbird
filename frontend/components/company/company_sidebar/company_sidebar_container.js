import { connect } from 'react-redux';
import CompanySidebar from './company_sidebar';
import { fetchUser, updateUser } from '../../../actions/users/user_actions';
import { createShare, 
  deleteShare, 
  updateShare 
} from '../../../actions/shares/share_actions';
import { addCompanyToWatchlist, removeCompanyFromWatchlist } from '../../../actions/watchlists/watchlist_actions';

const mSTP = (state, ownProps) => {
  const symbol = ownProps.match.params.companyId;
  const user = state.entities.users[state.session.id];
  const company = state.entities.companies[symbol];
  const watchlists = state.entities.watchlists;
  return {
    company,
    user,
    watchlists,
    color: state.ui.color
  };
};

const mDTP = dispatch => {
  return {
    createShare: share => dispatch(createShare(share)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    deleteShare: shareId => dispatch(deleteShare(shareId)),
    updateShare: share => dispatch(updateShare(share)),
    addCompanyToWatchlist: watchlist => dispatch(addCompanyToWatchlist(watchlist)),
    removeCompanyFromWatchlist: watchlist => dispatch(removeCompanyFromWatchlist(watchlist))
  };
};

export default connect(mSTP, mDTP)(CompanySidebar);