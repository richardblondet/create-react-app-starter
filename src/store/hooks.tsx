import { useCallback, useContext, useMemo } from "react";
import { setLocale } from "./actions";
import { IntlStore } from "./providers";
import { TranslateFunctionOptions } from "./types";

/**
 * Custom Application Hooks
 * 
 * Hooks let you use state and other React 
 * features without writing a class.
 */
export default 'store/hooks';

/**
 * Intl Hook
 */
export const useIntlHook = () => {
  const { state, dispatch } = useContext(IntlStore);
  const { locale, translations } = useMemo(() => state, [state]);

  /** hook helper function */
  const translate = (key:string, options?:TranslateFunctionOptions) => {

    /** Allow us to so simple var replacement, no edge cases */
    if (translations[locale][key]) {
      if (options && (options.key && options.value)) {
        return (translations[locale][key] as string).replace(options.key, options.value);
      }
      return translations[locale][key]
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