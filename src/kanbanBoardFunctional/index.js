import React, { useState } from 'react';
import "./index.css";
const KanbanBoard = () => {

    let [enteredInputValue, setEnteredInputValue] = useState('');
let[enteredDateValue,setEnteredDateValue]= useState('');

    const handleInput = (e) => {

        setEnteredInputValue(
            e.target.value
        )

    }
    const handleClick = (e) => {
        e.preventDefault();// prevent reloading of page

        const inputData = {

            inputValue: enteredInputValue,
            date:new Date(enteredDateValue)
        }

        console.log(inputData);
        setEnteredDateValue('');
        setEnteredInputValue('');
        // //         
        //         {inputData && inputData.map((i,index)=>{
        //             return(
        //            <ui key={index}>                 <li>
        //  {i}

        //                 </li>
        //             </ui>
        //         ) })}
    }
    // console.log('hi');
const handleDate=(e)=>{
    setEnteredDateValue(e.target.value)
    
}
    return (
        <div className="kanban-outer">
            <form className="kanban-form">
                <div>
                    <div style={{ display: "flex" }}>
                        <label style={{paddingLeft:"300px"}}>Title</label>
                        <input type="text"

                            onChange={handleInput}
                            value={enteredInputValue}
                            style={{ marginRight: "20px" ,backgroundColor:"purple"}} />

                        <div class="kanban-input">
                            <label>Date</label>
                            <input type="date"
                                min='2019-01-01'
                                max='2022-12-31'
                                onChange={handleDate}
                                value={enteredDateValue}
                                style={{ marginRight: "20px" ,backgroundColor:"purple"}}
                            />
                        </div>
                    </div>
                    <div className="kanban-add-button">
                    <button 
                    style={{ marginRight: "20px" ,backgroundColor:"purple"}}
                    onClick={handleClick}>Add</button>
                    </div>

                </div>
            </form>

        </div>

    )
}
export default KanbanBoard;