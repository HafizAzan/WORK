/** @format */

import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Author from "./components/Author";
import Isbn from "./components/Isbn";
import { useState } from "react";
import Tbody from "./components/Tbody";

function App() {
  const [ArrayValuesSaveAll, setArrayValuesSaveAll] = useState({
    TitleValue: [""],
    AuthorValue: [""],
    IsbnValue: [""],
  });

  const [newValuePushesArray, setNewValuePushesArray] = useState({
    PushTitle: [],
    PushAuthor: [],
    PushISBN: [],
  });

  const SubmitForm = (event) => {
    event.preventDefault();
    if (ArrayValuesSaveAll.TitleValue == "" || ArrayValuesSaveAll.AuthorValue == "" || ArrayValuesSaveAll.IsbnValue == "") {
      alert("oops Fill This Form");
      return;
    }
  };
  return (
    <div className="container">
      {/* <div className="alert success">success alert</div>
      <div className="alert error">error alert</div> */}
      <h1>Add Book</h1>
      <form id="book-form" onSubmit={SubmitForm}>
        <Title ArrayValuesSaveAll={ArrayValuesSaveAll} setArrayValuesSaveAll={setArrayValuesSaveAll} newValuePushesArray={newValuePushesArray} setNewValuePushesArray={setNewValuePushesArray} />
        <Author ArrayValuesSaveAll={ArrayValuesSaveAll} setArrayValuesSaveAll={setArrayValuesSaveAll} newValuePushesArray={newValuePushesArray} setNewValuePushesArray={setNewValuePushesArray} />
        <Isbn ArrayValuesSaveAll={ArrayValuesSaveAll} setArrayValuesSaveAll={setArrayValuesSaveAll} newValuePushesArray={newValuePushesArray} setNewValuePushesArray={setNewValuePushesArray} />
        <div>
          <input type="submit" value="Submit" className="u-full-width" />
        </div>
      </form>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Trash</th>
          </tr>
        </thead>
        <Tbody />
      </table>
    </div>
  );
}

export default App;
