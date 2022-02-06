import React from 'react';
import ChildDate from './ChildDate';
export default function ChildExpences(props) {

    
    return (
        <div>
            <div>
                {/* <div>
                    <ChildMonth id={props.id} />
                </div> */}
            </div>
            <h2>{props.title}</h2>
            <div>
                <ChildDate date={props.date} /> {/*again passing data to child*/}
                
            </div>
        </div>
    )
}