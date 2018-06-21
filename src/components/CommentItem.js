import React from "react";
import { Link } from "react-router-dom";
import defaultProfileImage from "../images/Anonymous.jpg";

export default ({
  isCorrectUser,
  text,
  id,
  handleDelete,
  profileImageUrl,
  author,
  authorId
}) => {
  return (
    <li className="row comment">
      <div className="d-none d-md-block">
        <Link to={`/users/${authorId}`}>
          <img
            className="rounded-circle"
            src={profileImageUrl || defaultProfileImage}
            alt="Image"
          />
        </Link>
      </div>
      <div className="col-xs-12 col-md-10">
        <div className="comment-box">
          <div className="row">
            <span className="ml-3 text-muted">{author} says:</span>
            {isCorrectUser && (
              <a
                onClick={() => {
                  handleDelete(id);
                }}
                className="close-symbol ml-auto mr-3"
              >
                <i className="text-danger fas fa-times" />
              </a>
            )}
          </div>
          <hr />
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
};
