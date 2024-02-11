/** @format */

import React, { useState } from "react";
const Title = ({ ArrayValuesSaveAll, setArrayValuesSaveAll, newValuePushesArray, setNewValuePushesArray }) => {
  const [titleValue, setTitleValue] = useState(ArrayValuesSaveAll.TitleValue);
  const TitleValueHandler = (event) => {
    event.preventDefault();
    setTitleValue(event.target.value);
    setArrayValuesSaveAll({ ...ArrayValuesSaveAll, TitleValue: event.target.value });

    const TempraryPushesTitle = [...newValuePushesArray];
    TempraryPushesTitle.push(titleValue);
    setNewValuePushesArray(TempraryPushesTitle);
    console.log(TempraryPushesTitle);
  };
  return (
    <div>
      <label>Title</label>
      <input type="text" id="title" className="u-full-width" onChange={TitleValueHandler} value={titleValue} />
    </div>
  );
};
export default Title;
