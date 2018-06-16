import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleNewComment(event, this.state.comment);
    this.setState({ comment: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container text-center pb-4 mt-5 mb-5 comment-form">
        <input
          placeholder="Write your comment here!"
          className="form-control"
          name="comment"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Share
        </button>
      </div>
    );
  }
}

export default CommentForm;
