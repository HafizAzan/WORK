/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

const apiBaseUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostJson();
  }, []);

  const getPostJson = () => {
    fetch(apiBaseUrl)
      .then((data) => data.json())
      .then((data) => {
        console.log(data, "data ie here");
        setPosts(data);
      })
      .catch((error) => console.error(error));
  };

  const DeleteBtnhandile = (postId) => {
    fetch(`${apiBaseUrl}/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        getPostJson();
        Swal.fire("Your Post is Deleted", "", "success");
      })
      .catch(() => {
        Swal.fire("Your Post is not Deleted", "", "error");
      });
  };

  const DeleteBtnHandler = (event, postId) => {
    event.preventDefault();
    Swal.fire({
      title: "Do You Want To Delete This Post?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteBtnhandile(postId);
      }
    });
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
        <div className="modal fade" id="create-post">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
                <h4 className="modal-title">Create Post</h4>
              </div>
              <div className="modal-body">
                <form action="" method="POST" role="form" id="create-post-form">
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="post_title" placeholder="Title" />
                  </div>

                  <div className="form-group">
                    <label>Body</label>
                    <textarea name="" id="post_body" cols="30" rows="10" placeholder="Body" className="form-control"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="edit-post">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
                <h4 className="modal-title">Edit Post</h4>
              </div>
              <div className="modal-body">
                <form action="" method="POST" role="form" id="edit-post-form">
                  <input type="hidden" name="post_id" id="edit_post_id" />
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="edit_post_title" placeholder="Title" />
                  </div>

                  <div className="form-group">
                    <label>Body</label>
                    <textarea name="" id="edit_post_body" cols="30" rows="10" placeholder="Body" className="form-control"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

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
            {posts?.map((singlePost) => {
              return (
                <tr key={singlePost.id}>
                  <td>{singlePost.id}</td>
                  <td>{singlePost.userId}</td>
                  <td>{singlePost.title}</td>
                  <td>
                    <button className="btn btn-primary ">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={(event) => DeleteBtnHandler(event, singlePost.id)}>
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
