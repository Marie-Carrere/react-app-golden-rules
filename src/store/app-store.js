import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rulesReducer from '../reducers/rules-reducer'

const reducer = combineReducers({
    rules: rulesReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
    reducer, 
    composeEnhancer(applyMiddleware(thunk))
);