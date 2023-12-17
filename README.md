# Sinha Context Provider
This is just an over layer of React's Context Hook, with this package you will be provided with a function to update context value from lower components. Hence, you don't need to pass `setState` Hook's function within the components or manually code it to create a equivalent.

## How to Use?
```js
    import React, {createContext, useContext} from 'react';
    import ContextProvider from 'sinha-context-provider';

    const Auth = createContext(); // Initialize the Context API
    function App(){
        return(
            <ContextProvider context={Auth} value={0}>
            {/*
                Instead of using Auth.Provider, use ContextProvider function and pass your context
                into context prop.

                You have to pass default value to it
            */}
                <h1>
                    HELLO WORLD
                </h1>
                <MyCoolComp />
            </ContextProvider>
        );
    }

    function MyCoolComp(){
        const data = useContext(Auth);
        return(
            <p>
                {data.current}
                {/*
                    Instead of providing value directly, you have to access it using
                    current key as done above.
                */}
                <button onClick={()=>data.setCurrent(value=>++value)}>Click Me</button>
                {
                    /*
                        You can update value using function in setCurrent key like done above,
                        this can be used just like setState functions, ie, 
                        data.setCurrent(v=>v+1);
                        and
                        data.setCurrent("Hello");

                        both are legal parameters
                    */
                }
            </p>
        );
    }

    export default App;
```