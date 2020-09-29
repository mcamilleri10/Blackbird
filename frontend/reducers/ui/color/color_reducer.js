import { RECEIVE_COLOR } from '../../../actions/ui/ui_actions';


const colorReducer = (state = 'gray', action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COLOR:
      return action.color;
    default:
      return state;
  }
};

export default colorReducer;