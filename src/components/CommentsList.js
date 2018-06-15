import React, { Component } from "react";

import CommentItem from "./CommentItem";

class CommentsList extends Component {
  render() {
    const comments = this.props.comments.map(c => (
      <CommentItem
        profileImageUrl={c.author.profileImageUrl}
        author={c.author.username}
        isCorrectUser={this.props.currentUserId === c.author.id}
        id={c._id}
        handleDelete={this.props.handleDelete}
        key={c._id}
        text={c.text}
      />
    ));

    return (
      <div className="container">
        <div className="row text-white">
          <h3 id="fragrancelist">Comments</h3>
        </div>
        <div className="row mb-5">
          <div className="underline" />
        </div>

        <ul className="container" className="list-group">
          {comments}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
