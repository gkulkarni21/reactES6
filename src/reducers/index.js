import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses //short-hand propery names
});

export default rootReducer;
