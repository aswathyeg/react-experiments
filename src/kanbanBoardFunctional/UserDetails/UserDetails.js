import React from 'react';
export default function UserDetails(props) {
    const items = props.data.title;
    return (

        <div>
            {/* <h3>
                {items}
            </h3> */}
            {items.map((i) => {
                return (
                    <ui>
                        <li >
                            {i}
                        </li>)



                    </ui>
                )
            })} 
            {/* <table>

<th className="tableHead">

<tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
         
        </tr>
</th>


<tbody>
  {items.map(items=>{return(
    <tr>
    
    <td>{items.title}</td>
    <td>{items.date}</td>
    
  </tr>

  )

  })}
  </tbody>
      
      </table> */}
        </div>

    )

}