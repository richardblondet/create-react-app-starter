import React, { 
  FunctionComponent,
  useReducer, 
  Reducer, 
  Dispatch, 
  createContext, 
} from "react";
import { Action, ReducersHandlers, State } from "./types";

/**
 * Utils 
 * 
 * This file holds utility functions.
 */
export default 'store/utils';

/**
 * Compose components
 * 
 * Use this utility wrapper to organize components that 
 * only hold 1 children.
 */
export const composeComponent = (wrappers: FunctionComponent[]): FunctionComponent => {
  const composed = wrappers.reduce((Acc, Current): FunctionComponent => {
    return props => <Current><Acc {...props} /></Current>
  });
  console.log('Componsing,', composed);
  return composed;
}

/**
 * Store Reducer Factory
 * 
 * Create store reducers using this factory 
 * with type checking in mind.
 * 
 * ---
 * Usage:
 * const [simpleStore, simpleStoreProvider] =
 * storeReducerFactory<ProviderState, Action>(RootReducer, RootState);
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
}

/**
 * Reducer generator
 * 
 * Manage the state actions for the application store context.
 * Each provider can be managed with a reducer. Use this to create reducers.
 * 
 * @todo add a debug condition from an ENV
 */
export const createReducer = <T extends State, A extends Action>
  (handlers:ReducersHandlers<T, A>) => (state:T, action:A): T => {
  
  /** Observe ongoing actions */ /** may add condition if debug is ON */
  console.log("%c [action]: %s", "font-weight: bold; color: #6B5ADF;", action.type.toUpperCase(), action.payload );
  
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  /** Apply any middleware to all reducers here */
  /** end of middlewares */
  
  /** Run */
  return handlers[action.type](state, action);
};