import { ApplicationStoreState, IntlStoreState } from './types';
import { getDeviceLanguage, i18nTools } from './utils';

/**
 * Application Initial States
 * 
 * Every state could be initialized here, always provided
 * with correct types or interfaces.
 */


/** Application */
export const ApplicationState: ApplicationStoreState = {
  version: '0.0.1',
};

/** Intl */
const language = getDeviceLanguage('en');
const [i18nStrings] = i18nTools();
export const IntlState: IntlStoreState = {
  locale: language,
  translations: i18nStrings,
};