import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  table: tableReducer,
  user: userReducer,
});

export default rootReducer;
