import React from 'react';
export default function TodoList(props){
    const  {title,list}=props
    
        return(
            <div  className="todolist">
                <h1>{title.toUpperCase()}</h1>

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
