import React, { useState } from 'react';
import "./index.css";
import UserDetails from './UserDetails/UserDetails';
const KanbanBoard = () => {

    let [enteredTitleValue, setEnteredTitleValue] = useState([]);
    let [enteredDateValue, setEnteredDateValue] = useState([]);
    let [data,setData]=useState([]);

    const handleTitle = (e) => {

        setEnteredTitleValue(
            e.target.value
        )

    }
    const handleDate = (e) => {
        setEnteredDateValue(e.target.value)

    }
    
    const handleClick = (e) => {
        e.preventDefault();// prevent reloading of page

      setData( {

            title: enteredTitleValue,
            date:new Date(enteredDateValue)
           
        }
    
      )

        //console.log(inputData);
        // setEnteredDateValue('');
        // setEnteredTitleValue('');
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
    
    return (
        <div className="kanban-outer">
            <form className="kanban-form">
                <div>
                    <div style={{ display: "flex" }}>
                        <label style={{ paddingLeft: "300px" }}>Title</label>
                        <input type="text"

                            onChange={handleTitle}
                            value={enteredTitleValue}
                            style={{ marginRight: "20px", backgroundColor: "purple" }} />

                        <div class="kanban-input">
                            <label>Date</label>
                            <input type="date"
                                min='2019-01-01'
                                max='2022-12-31'
                                onChange={handleDate}
                                value={enteredDateValue}
                                style={{ marginRight: "20px", backgroundColor: "purple" }}
                            />
                        </div>
                    </div>
                    <div className="kanban-add-button">
                        <button
                            style={{ marginRight: "20px", backgroundColor: "purple" }}
                            onClick={handleClick}>Add</button>
                    </div>

                </div>
            </form>
            <UserDetails data ={data}/>

        </div>

    )
}
export default KanbanBoard;