import React from 'react';
import classes from './Button.module.css';
export default function Button(props) {
    return(
    <div className={classes.button}>
        <button type={props.type||'submit'}
        onClick={props.onClick}>
{props.children}
        </button>
    </div>
    )
}