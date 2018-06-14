import React from "react";
import team_member_1 from "../images/team/1.jpg";

export default ({ isCorrectUser, text, id, handleDelete }) => {
  return (
    <li className="row comment">
      <div className="d-none d-md-block   ">
        <img className="rounded-circle" src={team_member_1} alt="Image" />
      </div>
      <div className="col-xs-12 col-md-10">
        <div className="comment-box ml-auto">
          <p>Johny says:</p>
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
