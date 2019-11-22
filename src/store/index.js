import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'

import thunk from 'redux-thunk';
import {reducer as cars} from '../cars';
import {reducer as filters} from '../parking';
import logger from 'redux-logger'

const rootReducer = combineReducers({cars, filters})
const store = createStore(rootReducer, applyMiddleware(...[thunk]));

export default store;