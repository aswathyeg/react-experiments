import React from 'react';
interface Props{

}
interface State{
    isOpen:boolean

}
class Booklist extends React.Component<Props,State>{
constructor (props:Props){
    super(props);
    this.state={
isOpen:false,
    }
}


render(){
    return(
       <div>
<button type='button'
onClick={()=>{

    this.setState((prevState)=>({ isOpen: !prevState.isOpen})
    
    )
}}
>
    
    BOOKS</button>
    <div style={{display:this.state.isOpen?'block':'none'}}>

        <ul>
            <li>
Book 1

            </li>
            <li>
Book 2

            </li>
            
        </ul>
    </div>
</div> 

    );
}

}
export default Booklist;