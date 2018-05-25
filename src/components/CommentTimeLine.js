import React, { Component } from 'react'

import CommentItem from './CommentItem';


export default class CommentTimeLine extends Component {
  render() {
    const comments = this.props.comments.map((c)=>(
      <CommentItem text={c.text} key={c._id} />
    ));

    return (
      <div>
        {comments}
      </div>
    )
  }
}
