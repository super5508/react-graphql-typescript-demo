import { combineReducers } from 'redux';
import { marketplace } from './marketplace';

/**
 * Creating Root Reducer.
 * You can combine multiple child reducer functions to extend functionality
 */
const rootReducer = combineReducers({
  marketplace,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
