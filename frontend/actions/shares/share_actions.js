import * as ShareApiUtil from '../../util/shares/shares_api_util';

export const RECEIVE_SHARE = 'RECEIVE_SHARE';

const receiveShare = share => {
  return {
    type: RECEIVE_SHARE,
    share
  };
};

export const fetchShare = shareId => {
  return dispatch => {
    return ShareApiUtil.fetchShare(shareId)
      .then(share => dispatch(receiveShare(share)));
  };
};