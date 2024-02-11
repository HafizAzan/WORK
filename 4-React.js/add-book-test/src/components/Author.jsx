/** @format */

import React, { useState } from "react";
const Author = ({ ArrayValuesSaveAll, setArrayValuesSaveAll, newValuePushesArray, setNewValuePushesArray }) => {
  const [authorValue, setAuthorValue] = useState(ArrayValuesSaveAll.AuthorValue);
  const AuthorValuesHandler = (event) => {
    event.preventDefault();
    setAuthorValue(event.target.value);
    setArrayValuesSaveAll({ ...ArrayValuesSaveAll, AuthorValue: event.target.value });
    console.log(event.target.value);
  };
  return (
    <div>
      <label>Author</label>
      <input type="text" id="author" className="u-full-width" onChange={AuthorValuesHandler} value={authorValue} />
    </div>
  );
};
export default Author;
