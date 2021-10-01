import React, { useState } from 'react';
import './FormExample.css'
export default function FormExample() {
    const[submitting,setSubmitting]=useState(false);


    const handleSubmit = (event) => {//given SyntheticEvent as an argument.
        event.preventDefault();// to stop the page from refreshing the page once click ok on alert

       // alert('You have submitted the form.')
       setSubmitting(true);

       setTimeout(()=>{
        setSubmitting(false)
       },3000)


    }
    return (
        <div className="wrapper">
            <h1>
                How about the Apples
            </h1>
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