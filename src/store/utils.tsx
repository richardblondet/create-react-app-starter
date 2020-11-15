import React, { 
  FunctionComponent,
  useReducer, 
  Reducer, 
  Dispatch, 
  createContext,
  useContext, 
} from "react";
import { 
  Action, 
  Languages, 
  ProtectedRouteProps, 
  ReducersHandlers, 
  State } from "./types";
import EN from '../i18n/en.json';
import ES from '../i18n/es.json';
import { Redirect, Route } from "react-router-dom";

/**
 * Utils 
 * 
 * This file holds utility functions.
 */
// export default 'store/utils';

/**
 * Compose components
 * 
 * Use this utility wrapper to organize components that 
 * only hold 1 children.
 */
export const composeComponent = (wrappers: FunctionComponent[]): FunctionComponent => {
  return wrappers.reduce((Acc, Current): FunctionComponent => {
    return props => <Current><Acc {...props} /></Current>
  });
};

/**
 * Store Factory
 * 
 * Create contexts and provide easy access to state.
 * Good for readonly states.
 * 
 * @param defaultValue Pass optional default value 
 */
export const storeContextFactory = <A,>(defaultValue?:A) => {
  const contxt = createContext<A | undefined>(defaultValue)
  
  /** Using context right away */
  const useThisContext = () => {
    const c = useContext(contxt)
    
    if (!c) throw new Error("useThisContext must be inside a Provider with a value")
    
    return c;
  }
  return [useThisContext, contxt.Provider] as const
};

/**
 * Store Reducer Factory
 * 
 * Create store reducers using this factory 
 * with type checking in mind.
 * 
 * ---
 * Usage:
 * const [simpleStore, simpleStoreProvider] =
 * storeReducerFactory<ProviderState, Action>(TheReducer, TheState);
 * 
 * @param reducer 
 * @param initialValues 
 */
export const storeReducerFactory = <StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>, 
  initialValues: StateType,
) => {
  
  /** Our reducers needs a dispatcher */
  const dispatcher: Dispatch<ActionType> = (value:ActionType) => initialValues;
  
  /** The store context */
  const Store = createContext({
    state: initialValues,
    dispatch: dispatcher
  });
  
  /** Provider Component */
  const Provider:FunctionComponent = (props) => {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(reducer, initialValues);
    
    return (
      <Store.Provider value={{ state, dispatch }} {...props} />
    );
  };

  /** Them */
  return [Store, Provider] as const;
};

/**
 * Reducer generator
 * 
 * Manage the state actions for the application store context.
 * Each provider can be managed with a reducer. Use this to create reducers.
 * 
 * usage:
 * const aReducer = createReducer<State, Action>({
 *    [ACTION_ID]: ():State => {}
 * })
 */
export const createReducer = <T extends State, A extends Action>
  (handlers:ReducersHandlers<T, A>) => (state:T, action:A): T => {
  /** Observe ongoing actions */
  if (process.env.NODE_ENV !== 'production') {
    console.log(
      "%c ACTION[%s]", "font-weight: bold; color: #6B5ADF;", 
      action.type.toUpperCase(), 
      "[payload]: ",
      action.payload 
    );
  }
  
  /** There should not be any action type going on if its not defined, right? */
  if (!handlers.hasOwnProperty(action.type)) {
    throw new Error(); /* you better call saul */
  }

  /** Apply any middleware to all reducers here */
  /** end of middlewares */
  
  /** Run */
  return handlers[action.type](state, action);
};

/**
 * Intl Tools
 * 
 * This handy tools to manage our local i18n.
 * 
 */
export const i18nTools = () => {
  /** Add languages heres */
  const translations:Languages = {
    en: EN,
    es: ES
  };

  /** This function will be used to create `translate` function for the context */
  const getTranslations = (locale:string) => (key:string) => 
      translations[locale][key] || key;

  /** Provide avaliable languages */
  const availableLanguages = Object.keys(translations);

  /** Them */
  return [translations, availableLanguages, getTranslations] as const;
};

/**
 * Little Helper to get the device language or 
 * a default one
 */
export const getDeviceLanguage = (provided?:string) => {
  /** Allow me to just use a default one or not at function call */
  if (provided) {
    return provided;
  }
  const formattedLanguage = (navigator.language || '').split('-');

  return formattedLanguage[0];
};

/** Get ApplicationName */
export const getAppName = (): string => {
  return process.env.REACT_APP_APP_NAME || '';
};

/** Get ApplicationVersion */
export const getAppVersion = (): string => {
  return process.env.REACT_APP_APP_VERSION || ''
}

/** Slugify for internal use, no edge cases */
export const slugifyMe = (str: string, separator: string = '-'): string => {
  return str
      .toLocaleLowerCase()
      .replace(/[^a-z0-9 -]/g, "")  /** remove invalid chars */
      .replace(/\s+/g, separator)   /** collapse whitespace and replace by ${separator} */
      .replace(/-+/g, "-")          /** collapse dashes */
      .replace(/^-+/, "")           /** trim - from start of text */
      .replace(/-+$/, "");
};

/** 
 * Gets you the app name as slugged prefix 
 * or prefix it yourself */
export const getTextDomain = (str: string, prx: string = slugifyMe(getAppName())): string => {
  return `@${prx}/${str}`;
};

/**
 * Private Route Handler
 * @param props ProtectedRouteProps
 * @see {@link https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4-a}
 */
export const PrivateRoute: React.FC<ProtectedRouteProps> = props => {
  /** extract */
  const { 
    isAuthenticated,
    isAllowed = true,
    unauthorizedPath = '/auth',
    forbiddenPath = '/403',
    component, 
    path 
  } = props;
  
  /** if you are not in by any means then  */
  if (!isAuthenticated) {
    return <Redirect to={unauthorizedPath} />;
  }
  
  /** if you are in but not allowed then  */
  if (isAuthenticated && !isAllowed) {
    return <Redirect to={forbiddenPath} />;
  }

  /** it */
  return <Route path={path} component={component} />;
};