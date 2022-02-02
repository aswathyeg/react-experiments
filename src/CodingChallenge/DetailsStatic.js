//Display slides with static data
import React, { useState } from 'react';
import './Slides.css';

export default function Slides(props) {

    // const [address, setAddress] = useState([]);
    let allAddress = props.address;
     let restart=props.restart;
     let next=props.next;
     let prev=props.prev;
     let current=props.current;
   

    // const getData = () => {


    // }
    return (
        <div className="outer">
            <table>
                <tbody>
                    {/* {allAddress && allAddress.map((i, index) => {
                        return (
                            <div>
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.phone}</td>
                                    <td>{i.company.name}</td>

                                    
                                </tr>
                            </div>
                        )

                    })} */}
                    <div>
                    <button onClick={restart} disabled={ current===0}>
                        restart
                    </button>
                    <button onClick={prev} disabled={current===0}>
                        prev
                    </button>
                    <button onClick={next} disabled={current===allAddress.length-1}>
                        next
                    </button>
                    </div>
                </tbody>

            </table>
            <div>
                <h1>
                    {allAddress[current] && allAddress[current].name}
                </h1>
                <h2>
                    {allAddress[current] && allAddress[current].phone}
                </h2>
            </div>

            {/* <button onClick={handleShow}>ShowDetais</button> */}

        </div>



    )
}
