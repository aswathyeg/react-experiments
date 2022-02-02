import React, { Component } from "react";
import "./index.css";

export default class KanbanBoard extends Component {
  constructor() {
    super();
    // Each task is uniquely identified by its name. 
    // Therefore, when you perform any operation on tasks, make sure you pick tasks by names (primary key) instead of any kind of index or any other attribute.
    this.state = {
      tasks: [
        { name: '1', stage: 0 },
        { name: '2', stage: 0 },
      ],
      inputValue: ''
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
    this.handleClick=this.handleClick.bind(this);
    this.handleInput=this.handleInput.bind(this);
  }

  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < this.stagesNames.length; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }
   
    const handleInput=(e)=>{
      this.state.inputValue= e.target.value;

    }
    const handleClick=()=>{
      let taskArray=[];
      taskArray.push(this.state.inputValue.value);
      console.log(taskArray);

      
    }

  return (
    <div className="kanban-outer">
<form className="kanban-form">
  <div >
    
    <input type="text" placeholder="Add token" onChange={handleInput} 
    style={{marginRight:"20px"}}/>
   
    <button onClick={handleClick}>Add</button>
    <ul>
      <li>
        
      </li>
    </ul>
  </div>
</form>

    </div>

  );
}

}