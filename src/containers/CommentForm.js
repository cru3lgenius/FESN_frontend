import React, { Component } from 'react'


class CommentForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      comment:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleNewComment(event,this.state.comment);
    this.setState({comment:""});
  }

  handleChange(event){
    this.setState({[event.target.name]:event.target.value});
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">
        Write your comment:
        </label>
        <input
          className="form-control"
          name="comment"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-success">Add Comment</button>
      </form>
    )
  }
}


export default CommentForm;