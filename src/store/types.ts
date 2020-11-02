import { Reducer, Dispatch } from "react";
import { init } from "./actions";

/**
 * @revision
 * 
 * To learn more about types in typescript, please:
 * @see {@link https://redux.js.org/recipes/usage-with-typescript}
 * @see {@link https://mariusschulz.com/blog/passing-generics-to-jsx-elements-in-typescript}
 */


/** Base State Object */
export interface State {}

/** Base Reducer's Action */
export type Action = {
  type: string;
  payload?: any
};

/** Reducers Handlers object */
export interface ReducersHandlers<T, P> {
  [index:string]: Reducer<T, P>
}

/** Action Binder Type for Factory */
export interface ActionEffectBinder<A, T> {
  (arg:Dispatch<A>): Partial<T>
}

/** Error boundary props type */
export type ErrorBoundaryProps = {
  error?: Error;
  children?: React.ReactNode;
}
/** Error state type */
export type ErrorBoundaryState = { 
  error?: Error 
}
/** Error handler type */
export type ErrorHandler = 
  (error: Error, info: React.ErrorInfo) => void

/** ApplicationStoreReducerState */
export interface ApplicationStoreState extends State {
  readonly version: string;
  state?: string;
}
export type ApplicationStoreReducerActions = ReturnType< 
  typeof init
>;
/** end ApplicationStoreReducerState */