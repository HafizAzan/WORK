/** @format */

import React from "react";

const TaskUl = ({ name }) => {
  return (
    <li className="collection-item">
      {name}
      <a href="/" className="delete-item secondary-content">
        <i className="fa fa-remove"></i>
      </a>
    </li>
  );
};

export default TaskUl;
