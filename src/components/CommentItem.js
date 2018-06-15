import React from "react";
import defaultProfileImage from "../images/Anonymous.jpg"

export default ({ isCorrectUser, text, id, handleDelete, profileImageUrl, author }) => {
  return (
    <li className="row comment">
      <div className="d-none d-md-block   ">
        <img className="rounded-circle" src={profileImageUrl || defaultProfileImage } alt="Image" />
      </div>
      <div className="col-xs-12 col-md-10">
        <div className="comment-box ml-auto">
          <p className="text-muted">{author} says:</p>
          <hr/>
          <p>
            {text}
          </p>

          {isCorrectUser && (
            <button
              onClick={() => {
                handleDelete(id);
              }}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
