import * as ShareApiUtil from '../../util/shares/shares_api_util';

export const RECEIVE_SHARE = 'RECEIVE_SHARE';
export const REMOVE_SHARE = 'REMOVE_SHARE';

const receiveShare = share => {
  return {
    type: RECEIVE_SHARE,
    share
  };
};

const removeShare = share => {
  // debugger
  return {
    type: REMOVE_SHARE,
    share
  };
};

export const fetchShare = shareId => {
  return dispatch => {
    return ShareApiUtil.fetchShare(shareId)
      .then(share => dispatch(receiveShare(share)));
  };
};

export const createShare = share => {
  // debugger
  return dispatch => {
    return ShareApiUtil.createShare(share)
      .then(share => dispatch(receiveShare(share)));
  };
};

export const deleteShare = shareId => {
  return dispatch => {
    return ShareApiUtil.deleteShare(shareId)
      .then((share) => dispatch(removeShare(share)));
  };
};

export const updateShare = share => {
  // debugger
  return dispatch => {
    return ShareApiUtil.updateShare(share)
      .then(share => dispatch(receiveShare(share)));
  };
};