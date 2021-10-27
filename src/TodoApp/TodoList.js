import React from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import Footer from './Footer';
import InputBox from './InputBox';

export default function TodoList(props){
    const  {title,list}=props;
    const count  =list.length; 
    
        return(
            <div  className="todolist">
                <Header title={title} />

                <ul className="list-unstyled">
                {list.map(item => <TodoItem key={item.id} data={item}/>)}
            </ul>
            <Footer count={count}/>
            <InputBox/>
            </div>
        )
    }
