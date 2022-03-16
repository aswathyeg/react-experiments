import React from 'react';
import Card from '../UI/Card';
export default function Display(props) {
    

    return (
        <Card>
            <ul>
                {props.value.map((display) => (

                    <li>
                     {display.name}

                    </li>


                ))}
            </ul>
        </Card>
    )
}
