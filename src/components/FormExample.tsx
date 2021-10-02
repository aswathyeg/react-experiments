import React, { useReducer, useState } from 'react';
import './FormExample.css'

const formReducer = (state, event) => {

    return {
        ...state,
        [event.name]: event.value
    }
}
const reducer=(state,action)=>{
    return{
...state,
[action]:!state[action]

}
}

export default function FormExample() {
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {});
    
    const [tabs,toggleTabs]=useReducer(reducer,{
        characterCount: true,
        wordCount: true,
        characterMap: true
    });

    const handleSubmit = (event) => {//given SyntheticEvent as an argument.
        event.preventDefault();// to stop the page from refreshing the page once click ok on alert

        // alert('You have submitted the form.')
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false)
        }, 3000)


    }
    const handleChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });


    }
    return (
        <div className="wrapper">
            <h1>
                How about the Apples
            </h1>
            {submitting &&
                <div>
                    You are submitting the following:
                   <ul>
                        {Object.entries(formData).map(([name, value]) => (//Convert the data to an array using Object.entries
                            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                        ))}
                    </ul>
                </div>
            }



            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name='name' onChange={handleChange}></input>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
               
            </form>
            <div>
      <button onClick={() => toggleTabs('characterCount')}>Character Count</button>
      <button onClick={() => toggleTabs('wordCount')}>Word Count</button>
      <button onClick={() => toggleTabs('characterMap')}>Character Map</button>
    </div>
        </div>
    )
}