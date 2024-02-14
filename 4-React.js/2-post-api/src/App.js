/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import Create_Popup from "./components/Create-Popup";
import Edit_Post from "./components/Edit-Post";

export const BaseApiUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPostSave] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch(BaseApiUrl)
      .then((Response) => Response.json())
      .then((data) => {
        setPostSave(data);
        console.log(data, "data is here");
      })
      .catch(console.error);
  };

  const DeletePostReal = (postId) => {
    fetch(`${BaseApiUrl}/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        Swal.fire("This Post Is Deleted SuccesFully!", " ", "success");
      })
      .catch(() => {
        Swal.fire("This Post Is Not Deleted SuccesFully!", " ", "error");
      });
  };

  const DeleteBtnSingleRow = (event, postId) => {
    event.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          DeletePostReal(postId);
        } else {
          Swal.fire("This Post Is Not Deleted SuccesFully!", " ", "error");
        }
      });
    console.log("deleted!");
  };

  const PopupOpenEdit = (event, PostId) => {
    event.preventDefault();
    window.$("#edit-post").modal("show");
  };

  return (
    <React.Fragment>
      <div className="loader-container" style={{ display: "none" }}>
        <div className="spinner"></div>
      </div>
      <div className="container">
        <h1>Posts</h1>
        <a className="btn btn-primary" data-toggle="modal" href="#create-post">
          Create Post
        </a>
        <Create_Popup getPosts={getPosts} />

        <Edit_Post />

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Post Id</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="todos-listing">
            {posts.map((singlePost) => {
              return (
                <tr key={singlePost.id}>
                  <td>{singlePost.id}</td>
                  <td>{singlePost.userId}</td>
                  <td>{singlePost.title}</td>
                  <td>
                    <button className="btn btn-primary" onClick={(event) => PopupOpenEdit(event, singlePost.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={(event) => DeleteBtnSingleRow(event, singlePost.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default App;
