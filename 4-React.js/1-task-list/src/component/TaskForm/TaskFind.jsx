/** @format */

import React from "react";

const TaskFind = (props) => {
  const { find, setFind } = props;
  const FindName = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setFind(event.target.value);
  };
  return (
    <div className="input-field col s12">
      <input type="text" name="filter" id="filter" onKeyUp={FindName} value={find} />
      <label>Filter Task</label>
    </div>
  );
};
export default TaskFind;
