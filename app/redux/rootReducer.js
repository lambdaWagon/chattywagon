import { combineReducers } from 'redux';

import { reducer as authReducer } from '../modules/auth';

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
