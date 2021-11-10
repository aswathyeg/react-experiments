import React, { useContext } from 'react';

const Context = React.createContext(1);

function Child(props) {
    return (
        <div>
            <GrandChild />

        </div>
    )
}
function GrandChild(props) {
    const value = useContext(Context)
    return (
        <div>
            {value}
        </div>
    )
}
export default function ContextExample() {
    return (
        <Context.Provider value={1}>
            <div>
                <Child />
            </div>
        </Context.Provider>)
}