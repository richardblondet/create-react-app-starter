import { ApplicationStoreState, ApplicationStoreReducerActions, IntlStoreState, IntlStoreReducerActions } from './types';
import { APP_INIT, INTL_SET_LOCALE } from './actions';
import { createReducer } from './utils';
import { ApplicationState, IntlState } from './states';

/**
 * Reducers
 * 
 * If using Store reducers, place them here.
 * If things grow, create a directory and separate them.
 * 
 */


 /** Application reducer */
export const ApplicationReducer = createReducer<ApplicationStoreState, ApplicationStoreReducerActions>({ 
  [APP_INIT]: (state = ApplicationState):ApplicationStoreState => {
    return {
      ...state,
    };
  }
});

export const IntlReducer = createReducer<IntlStoreState, IntlStoreReducerActions>({
  [INTL_SET_LOCALE]: (state = IntlState, action) => {
    return {
      ...state,
      locale: action.payload
    }
  }
})