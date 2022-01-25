import { Grid } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useState } from "react";

export default function ListExample() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");


    const handleChange = (e) => {
        setValue(e.target.value);

    }
    const handleAdd = () => {
        setList([...list, value]);
        setValue("");
    }
    const handleDelete = (item) => {
        setList(list.filter((ele)=>
            ele!=item
        ))

    };
    return (
        <div style={{ paddingTop: "100px", paddingLeft: "50px" }}>

            <input type="text"
                placeholder="Item Name"
                value={value}
                onChange={handleChange}
                style={{ marginRight: "50px" }} />

            <button style={{ marginRight: "50px" }} onClick={handleAdd} >Add</button>
            {/* <button onClick={handleDelete}>Delete</button> */}
            <ul>
        {list.length > 0 &&
          list.map((item) => {
            return <li onClick={()=>handleDelete(item)}>{item}</li>;
          })}
      </ul>
        </div>
    )

}