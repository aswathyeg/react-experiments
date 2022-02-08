import { useState } from "react"

export default function Parent() {
    let [state, setState] = useState('');
    const callbackFunction = (childData) => {
       state= setState( childData );

    }

    return (
        <div>
            <Child onCallback={callbackFunction} />
            {state}
        </div>)

}

function Child(props) {
    const onTrigger = (event) => {

        props.onCallback("ChildData");
        event.preventDefault();

    }
    return (
        <div>
            <form onSubmit={onTrigger}>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}