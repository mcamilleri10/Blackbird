import { combineReducers } from 'redux';
import loadingReducer from '../ui/loading/loading_reducer';
import colorReducer from './color/color_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  color: colorReducer
});

export default uiReducer;