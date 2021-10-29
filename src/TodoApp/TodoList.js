import React from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import Footer from './Footer';


export default function TodoList(props){
    const  {title,list,addNewItem,filter,changeFilter}=props;
    const count  =list.length; 
    const filteredList=applyFilter(list,filter)
    
        return(
            <div  className="todolist">
                <Header title={title} addNewItem={addNewItem}/>

                <ul className="list-unstyled">
                {list.map(item => <TodoItem key={item.id} data={item}/>)}
            </ul>
            <Footer count={{...count},filter, changeFilter}/>

            
            </div>
        )

       
    }
function  applyFilter(list,filter){

    switch(filter){
        case 'completed':
            return list.filter(item => item.completed === true);

        case 'active':
            return list.filter(item => item.completed !== true);

        default:
            return list;
    }
}