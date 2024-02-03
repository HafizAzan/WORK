import { useState } from 'react';
import './App.css';
import TaskForm from './component/TaskForm/TaskForm';
import TaskListLi from './component/TaskUL/TaskList';
import TaskFind from './component/TaskForm/TaskFind';

function App() {
  const [inputTask, setInputTask] = useState("");
  const [TaskList, setTaskList] = useState([]);
  const [find, setFind] = useState(true)
  
  return (
    <div className="container">
    <div className="row">
      <div className="col s12">
        <div id="main" className="card">
          <div className="card-content">
            <span className="card-title">Task List</span>
              <TaskForm
                inputTask={inputTask}
                setInputTask={setInputTask}
                TaskList={TaskList}
                setTaskList={setTaskList}
              />
          </div>
          <div className="card-action">
            <h5 id="task-title">Tasks</h5>
        <TaskFind/>

<TaskListLi TaskList={TaskList}/>
            <a className="clear-tasks btn black">Clear Tasks</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
