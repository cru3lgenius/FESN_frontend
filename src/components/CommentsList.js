import React, { Component } from 'react'

import CommentItem from './CommentItem';


class CommentsList extends Component {

  render() {
    const comments = this.props.comments.map((c)=>(
        <CommentItem 
          isCorrectUser={this.props.currentUserId === c.author.id} 
          id={c._id} 
          handleDelete={this.props.handleDelete} 
          key={c._id} 
          text={c.text} />
    ));

    return (
      <ul className="list-group">
        {comments}
      </ul>
    )
  }
}

export default CommentsList;