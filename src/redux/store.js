import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from './auth/auth.reducer';
import { bugReducer } from './bug/bug.reducer';


const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    bugs: bugReducer
})

export const store = legacy_createStore(rootReducer, createCompose(applyMiddleware(thunk)))