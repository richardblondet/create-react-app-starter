import { ApplicationStoreState, ApplicationStoreReducerActions } from './types';
import { APP_INIT } from './actions';
import { createReducer } from './utils';

/**
 * Reducers
 * 
 * If using Store reducers, place them here.
 * If things grow, create a directory and separate them.
 * 
 */


 /** Application reducer */
export const ApplicationReducer = createReducer<ApplicationStoreState, ApplicationStoreReducerActions>({ 
  [APP_INIT]: (state:any):ApplicationStoreState => {
    return {
      ...state,
    };
  }
});