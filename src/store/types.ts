/**
 * To learn more about types in typescript, please:
 * @see {@link https://redux.js.org/recipes/usage-with-typescript}
 */
export interface IState {
  readonly version: string,
  state: string,
};

export interface IAction<T = any> {
  type: string,
  payload?: T
};

export interface IContextProvider<T = any> {
  dispatch?: () => void,
};

export type Dispatch = (action: IAction) => void;

export type ContextProviderGenericProps = {
  children: React.ReactNode;
}

