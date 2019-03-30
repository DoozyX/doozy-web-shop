import React, { useState } from 'react';

export const RootContext = React.createContext(null);

export const RootContextProvider = ({ children }: any) => {
  const initialState = {
    farmer: true,
    updateProperty: (property: any, value: any) =>
      setState({
        ...state,
        [property]: value
      })
  };

  const [state, setState] = useState(initialState);
  return <RootContext.Provider value={state}>{children}</RootContext.Provider>;
};
