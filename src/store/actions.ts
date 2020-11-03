import { getTextDomain } from "./utils";

/**
 * Actions 
 * 
 * Keep them simple and use inference/optional
 * Having them all in the same file for small apps or creating
 * an action directory if needed.
 */
export default 'store/actions'


/** ApplicationStoreReducerActions */
export const APP_INIT = getTextDomain('APP_INIT');
export const init = () => ({
  type: APP_INIT
});

/** Intl ReducerActions */
export const INTL_SET_LOCALE = getTextDomain('INTL_SET_LOCALE');
export const setLocale = (locale:string) => ({
  type: INTL_SET_LOCALE,
  payload: locale
});