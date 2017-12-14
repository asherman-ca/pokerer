import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recordReducer from './recordReducer';

export default combineReducers({
  auth: authReducer,
  records: recordReducer
});
