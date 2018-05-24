import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import fragrances from './fragrances';

const rootReducer = combineReducers({
  currentUser,
  errors,
  fragrances
});

export default rootReducer;