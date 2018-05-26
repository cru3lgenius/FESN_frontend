import React, { Component } from 'react'

import CommentItem from './CommentItem';


export default class CommentTimeLine extends Component {
  render() {
    const comments = this.props.comments.map((c)=>(
      <li  key={c._id} className="list-group-item list-group-item-secondary">
          <CommentItem text={c.text} />
      </li>

    ));

    return (
      <div>
        {comments}
      </div>
    )
  }
}
