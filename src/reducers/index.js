/* eslint-disable no-undef */
import {combineReducers} from 'redux';
import cardReducer from './cardReducer';
import loginReducer from './loginReducer';

export default rootReducer = combineReducers({
  cards: cardReducer,
  login: loginReducer,
});
