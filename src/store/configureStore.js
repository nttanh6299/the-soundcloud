import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/devtools';

const enhancer = compose(applyMiddleware(thunk), DevTools.instrument());

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}
