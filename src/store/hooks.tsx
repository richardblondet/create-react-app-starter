import { useCallback, useContext, useEffect, useLayoutEffect, useMemo } from 'react';
import { setLocale, setTheme } from './actions';
import { ApplicationStore, IntlStore } from './providers';
import { TranslateFunctionOptions } from './types';

/**
 * Custom Application Hooks
 * 
 * Hooks let you use state and other React 
 * features without writing a class.
 */

/**
 * useIntl
 * 
 * Intl Hook for using strings and setting locale
 */
export const useIntl = () => {
  const { state, dispatch } = useContext(IntlStore);
  const { locale, translations } = useMemo(() => state, [state]);

  /** hook helper function */
  const translate = (key: string, options?: TranslateFunctionOptions) => {
    /** Allow us to so simple var replacement, no edge cases */
    if (translations[locale][key]) {
      if (options && (options.key && options.value)) {
        return (translations[locale][key] as string).replace(options.key, options.value);
      }
      return translations[locale][key];
    }
    return key;
  }

  /** hook bridge function for action */
  const updateLocale = useCallback((locale) => {
    dispatch(setLocale(locale));
  }, [dispatch]);

  /** Them */
  return {
    locale,
    translate,
    updateLocale,
    translations
  };
};

/**
 * useTheme
 * 
 * API for interacting with the Application provider
 * and managing theme
 */
export const useTheme = (name: string) => {
  const { state: { theme }, dispatch } = useContext(ApplicationStore);
  const selectedTheme = useMemo(() => theme, [theme]);
  
  /** Set the theme  */
  useEffect(() => dispatch(setTheme(selectedTheme)));
  
  /** Set the theme  */
  useLayoutEffect(
    () => {
      // Update css variables in document's root element
      document.body.classList.add(`selected-theme-${selectedTheme}`);
    }, [selectedTheme] 
  );

  /** Fire inmediately to use */
  if (name) {
    setTheme(selectedTheme);
  }

  /** Them vars */
  return { theme, setTheme } as const;
};