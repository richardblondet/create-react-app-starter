import React, { 
  FunctionComponent,
  useReducer, 
  Reducer, 
  Dispatch, 
  createContext,
  useContext,
  ComponentType,
  Component,
  ErrorInfo,
  FC
} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { shade, tint } from 'polished';
import { 
  Action, 
  ErrorBoundaryProps, 
  ErrorBoundaryState, 
  ErrorHandler, 
  Languages, 
  ProtectedRouteProps, 
  RangeColorsShape, 
  ReducersHandlers, 
  State, 
  TextPrimitiveProps
} from './types';
import EN from '../i18n/en.json';
import ES from '../i18n/es.json';
import { TextPrimitive } from '../components/Utils';
import themes from '../themes';

/**
 * Utils 
 * 
 * This file holds utility functions.
 */
// export default 'store/utils';


/**
* Error Boundary HOC
* 
* Returns a component type to isolate errors from its child down.
* 
* @returns {ComponentType} React Component Type  
* @see {@link https://gist.githubusercontent.com/andywer/800f3f25ce3698e8f8b5f1e79fed5c9c/raw/2d0ac6cace3bea9dc94997129c0ef20bfa8112a6/functional-error-boundary.ts}
*/
export const Catch = <P extends ErrorBoundaryProps> (
  ErrorComponent: ComponentType<P>, 
  errorHandler?: ErrorHandler
  ): ComponentType<P> => (
  
  /** Returning a Class Component for this feature */
  class ErrorBoundaryComponent extends Component<P, ErrorBoundaryState> {
    
    state: ErrorBoundaryState = {
      error: undefined
    };
    
    static getDerivedStateFromError(error: Error) {
      return { error };
    }
    
    componentDidCatch(error: Error, info: ErrorInfo) {
      if (errorHandler) {
        errorHandler(error, info);
      }
    }
    
    render() {
      return <ErrorComponent {...this.props} error={this.state.error} />;
    }
  }
);

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
 * });
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

  /** 
   * This function will be used to create `translate` function for the context 
   * @deprecated
   */
  const getTranslations = (locale:string) => (key:string) => 
      translations[locale][key] || key;

  /** Provide avaliable languages */
  const availableLanguages = Object.keys(translations);

  /** Them */
  return {translations, availableLanguages, getTranslations} as const;
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
  /** Get the device language otherwise */
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
 * Generate Palette
 * 
 * Little helper to generate palettes of dark and whites
 * 
 * @param color the color start point
 * @param direction the direction<'black' | 'white'>
 * @param step how much of it
 * 
 * @deprecated
 */
export const generatePalette = (color:string, direction:typeof shade | typeof tint, step:number = 0.1): RangeColorsShape => {
  let palette:RangeColorsShape = {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: ''
  };
  let key: keyof RangeColorsShape;
  let count = direction === shade ? 0: Object.keys(palette).length;
  for (key in palette) {
    direction === shade ? count++ : count--;
    if (Object.prototype.hasOwnProperty.call(palette, key)) {
      palette[key] = (direction(count*step, color) as string);
    }
  }
  return palette;
}

/**
 * Creates a component passing the base dynamic
 * component. 
 */
export const createTextComponent: (styleProps: TextPrimitiveProps, displayName?: string) => FC<TextPrimitiveProps> = (styleProps, displayName) => {
  const component: React.FC<TextPrimitiveProps> = props => (
    <TextPrimitive {...styleProps} {...props}>
      {props.children}
    </TextPrimitive>
  );
  component.displayName = displayName;
  return component;
}

/** Get a theme */
export const getTheme = (name: string) => themes[name] || name;