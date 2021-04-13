import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filters from './reducers/filters';
import cart from './reducers/cart';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  filters,
  cart,
});

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
