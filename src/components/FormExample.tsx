import React from 'react';
import './FormExample.css'
export default function FormExample() {
    const handleSubmit = (event) => {//given SyntheticEvent as an argument.
        event.preventDefault();// to stop the page from submitting the form
        alert('You have submitted the form.')


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