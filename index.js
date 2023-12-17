import React, { useState } from 'react';

function ContextProvider({ children, value, context }) {
  const [state, setState] = useState(value);
  const Context = context;
  function setCurrent(newValue) {
    if (typeof newValue === "function") {
      setState((current) => newValue(current));
    } else {
      setState(newValue);
    }
  }
  return (
    <Context.Provider value={{ current: state, setCurrent }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;