import React, { useReducer, useContext } from 'react';

/**
 * 
 * @see {@link https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c} 
 */

export const RootStore:any = React.createContext({});

export const RootStoreProvider:any = ({ reducer, initialState, children }: { reducer: any, initialState: any,  children: React.ReactNode }): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <RootStore.Provider value={value}>
      {children}
    </RootStore.Provider>
  );
};

export default {
  providers: ['RootStore']
};

export const useStateValue = () => useContext(RootStore);