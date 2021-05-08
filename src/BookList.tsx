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

    this.setState((precState))
}
>
    
    BOOKS</button>
    <div style={{display:isOpen?'block':'none'}}></div>
</div> 

    );
}

}
export default Booklist;