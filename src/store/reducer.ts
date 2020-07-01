import { IState, IAction } from './types';
import { initialState } from './initialState';
// import * as types from '../actions/types';


interface IHandlers {
  [index:string]:Function
};

/**
 * Manage the state actions for the application store context
 * 
 * @param state @interface State
 * @param action @interface Action
 */
const initReducers = (handlers:IHandlers) => (state: IState = initialState, action: IAction): IState => {
  
  /** Observe ongoing action */
  console.log("%c [action]: %s", "font-weight: bold; color: #6B5ADF;", action.type.toUpperCase(), action.payload );
  
  if ( !handlers.hasOwnProperty(action.type) ){
    return state;
  }
  
  return handlers[action.type](state, action);
};

/**
 * Initializes app handlers
 * 
 * Handler example:
 * [ADD_ITEM]: (state:<Interface>, data:<type|any>) => {
 *  // do something with state...
 *  return aNewState;
 * }
 * 
 * @param handlers @interface IHandlers
 */
const Reducer = initReducers({});

export {
  Reducer
};