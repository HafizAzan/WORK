/** @format */

import React, { useState } from "react";
const Isbn = ({ ArrayValuesSaveAll, setArrayValuesSaveAll, newValuePushesArray, setNewValuePushesArray }) => {
  const [isbnValue, setIsbnValue] = useState(ArrayValuesSaveAll.IsbnValue);
  const ISBNHandlerValue = (event) => {
    event.preventDefault();
    setIsbnValue(event.target.value);
    setArrayValuesSaveAll({ ...ArrayValuesSaveAll, IsbnValue: event.target.value });
    console.log(event.target.value);
  };
  return (
    <div>
      <label>ISBN#</label>
      <input type="number" id="isbn" className="u-full-width" onChange={ISBNHandlerValue} value={isbnValue} />
    </div>
  );
};
export default Isbn;
