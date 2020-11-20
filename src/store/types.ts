import { Reducer, Dispatch } from "react";
import { RouteProps } from "react-router-dom";
import { init, setLocale } from "./actions";

/**
 * @revision
 * 
 * To learn more about types in typescript, please:
 * @see {@link https://redux.js.org/recipes/usage-with-typescript}
 * @see {@link https://mariusschulz.com/blog/passing-generics-to-jsx-elements-in-typescript}
 */

export interface Json {
	[index:string]: string | number | boolean | Date | Json;
}
/** Base */
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
  readonly name: string;
  state?: string;
}
export type ApplicationStoreReducerActions = ReturnType< 
  typeof init
>;
/** end ApplicationStoreReducerState */

/** i18n languages shape */
export type Languages = {
  [index:string]: Json;
}
/** Intl State */
export interface IntlStoreState extends State {
  locale: string;
  translations: Languages;
};
/** Intl Actions  */
export type IntlStoreReducerActions = ReturnType<
  typeof setLocale 
>;

/** Translate Function Options */
export interface TranslateFunctionOptions {
  key: string;
  value: string;
}

/** Private Route */
export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  isAllowed?: boolean;
  unautheticatedPath?: string;
  unauthorizedPath?: string;
}