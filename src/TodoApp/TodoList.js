import React from 'react';
import Header from './Header';
export default function TodoList(props){
    const  {title,list}=props
    
        return(
            <div  className="todolist">
                <Header />

                <ul className="list-unstyled">
{list.map(item=>(
      <li key={item.id} className="ui-state-default">

<div className="checkbox">
                            <label>
                                <input type="checkbox" value=""/> {item.text}
                            </label>
                        </div>
  </li> 
))}

</ul>
            </div>
        )
    }
