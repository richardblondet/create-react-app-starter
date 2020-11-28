import { ApplicationStoreState, IntlStoreState } from './types';
import { getAppName, getAppVersion, getDeviceLanguage, i18nTools } from './utils';

/**
 * Application Initial States
 * 
 * Every state could be initialized here, always provided
 * with correct types or interfaces.
 */

/** Application */
export const ApplicationState: ApplicationStoreState = {
  name: getAppName(),
  version: getAppVersion(),
  theme: 'preset',
};

/** Intl */
const language = getDeviceLanguage('en');
const { translations } = i18nTools();
export const IntlState: IntlStoreState = {
  locale: language,
  translations
};