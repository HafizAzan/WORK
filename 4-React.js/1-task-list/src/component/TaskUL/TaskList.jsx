/** @format */

import React from "react";
import TaskUl from "./TaskUl";

const TaskListLi = (props) => {
  const { TaskList } = props;
  return (
    <ul className="collection">
      {TaskList.map((SingleTaskList, index) => {
        return <TaskUl key={index} name={SingleTaskList} />;
      })}
    </ul>
  );
};

export default TaskListLi;
