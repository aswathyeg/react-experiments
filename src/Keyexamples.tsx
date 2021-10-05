
function ListItem(props) {
    // Correct! There is no need to specify the key here:
     return <li>{props.value}</li>;
  }

  


export default function Keyexamples(props){
  const numbers=props.numbers;

  const listItems=numbers.map((number)=>
  <ListItem key={number.toString()} value={number}/>)
 
   return(
     <div>
       <ul><li>{listItems}</li></ul>
     </div>
   )
}
