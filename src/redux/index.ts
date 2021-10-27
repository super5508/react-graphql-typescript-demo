import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './reducers';

/**
 * Adding thunk into middlewares, we can use other middlewares inside array like redux-logger
 */
let middleware: Middleware[] = [thunk];

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(...middleware));

export type { RootState };
export default store;
