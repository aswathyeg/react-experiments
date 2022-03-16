import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
export default function StringExample(props) {
    const [name, setName] = useState('');
    const [value,setValue]=useState();

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name);
        if(name.trim().length===0){
            setValue ({
                tilte:'Invalid input',
                message:'Enter names'
            })
            return;
        }
        
       
        setName('');
        props.callBackClick(name);


    }

   
    return (
        <Card>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <Button type="submit" > Convert</Button>
        </form>
        </Card>
    )
}