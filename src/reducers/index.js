import createJobReducer from './createJob';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  createJob: createJobReducer,
});

export default allReducers;
