import React,{useState} from 'react';

const Fetch=(props)=>{
    const [username,SetUsername] = useState('');

    const handleChange=(e)=>{
        SetUsername(e.target.value);
        

    }
    const handleAdd =(e)=>{
        e.preventDefault();
        console.log(username);
       props.onCallback(username);

    }
    return(
        <div>
            <label>username</label>
            <input type="text"
            value={username} onChange={handleChange}/>

            <button onClick={handleAdd}>Add</button>
        </div>
    )

}
export default Fetch;