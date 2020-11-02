/**
 * Actions 
 * 
 * Keep them simple and use inference/optional
 * Having them all in the same file for small apps or creating
 * an action directory if needed.
 */
export default 'store/actions'


/** ApplicationStoreReducerActions */
export const APP_INIT = '@APP/APP_INIT';
export const init = () => ({
  type: APP_INIT
});
