/** @format */

import React from "react";

function Edit_Post() {
  return (
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
  );
}

export default Edit_Post;
