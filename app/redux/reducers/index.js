import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import mapReducer from './mapReducer';

export default combineReducers({ authReducer, errorReducer, mapReducer });
