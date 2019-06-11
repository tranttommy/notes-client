import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  notes: noteReducer,
  session: sessionReducer
});
