import React, { useReducer, useState } from 'react';
import './FormExample.css'

const formReducer=(state,event)=>{

return{
    ...state,
   [event.name]: event.value
}
}

export default function FormExample() {
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = (event) => {//given SyntheticEvent as an argument.
        event.preventDefault();// to stop the page from refreshing the page once click ok on alert

        // alert('You have submitted the form.')
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false)
        }, 3000)


    }
    return (
        <div className="wrapper">
            <h1>
                How about the Apples
            </h1>
            {submitting &&
                <div>
                    Submitting form ...
    </div>

            }



            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name='name'></input>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}