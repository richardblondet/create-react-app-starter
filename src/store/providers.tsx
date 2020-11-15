import { ApplicationState, IntlState } from './states';
import { ApplicationReducer, IntlReducer } from './reducers';
import { ApplicationStoreReducerActions, ApplicationStoreState, IntlStoreReducerActions, IntlStoreState } from './types';
import { storeReducerFactory } from './utils';

/**
 * Store Providers
 * 
 * A modern React application can contain (n) providers.
 * Stores can be reducers or simple contexts.
 * 
 * For future reference:
 * @see {@link https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c} 
 */
// export default 'store/providers';


/** Application Provider */
export const [ApplicationStore, ApplicationStoreProvider] =
  storeReducerFactory<ApplicationStoreState, ApplicationStoreReducerActions>(
    ApplicationReducer,
    ApplicationState
  );

/** Intl Provider */
export const [IntlStore, IntlStoreProvider] =
  storeReducerFactory<IntlStoreState, IntlStoreReducerActions>(
    IntlReducer,
    IntlState
  );



