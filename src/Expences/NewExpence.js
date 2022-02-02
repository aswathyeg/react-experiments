import React from 'react';
import './Expencess.css';
import Card from './Card';
export default function NewExpence(props) {
    const date=props.expenceDate.toLocaleString('en-US',{month:'long'});

    return (

        <div className="expencess">
            <h2> {props.expenceId}</h2>
            <h2> {props.expenceItem}</h2>
            <h2> {date}</h2>

        </div>
    )
}