import React, { useState } from 'react';
import AddButton from './AddButton';
export default function StringExample(props) {
    const [names, setNames] = useState('');
    const handleChange = (e) => {
        setNames(e.target.value)
    }

    callBackClick=(names)=>{
        
    }
    return (
        <form>
            <input type="text" value={names} onChange={handleChange} />
            <AddButton names={names}/>
        </form>
    )
}