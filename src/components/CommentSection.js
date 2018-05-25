import React, { Component } from 'react'
import CommentTimeLine from './CommentTimeLine';
import CommentForm from '../containers/CommentForm';

class CommentSection extends Component {
  
  render() {

    const{currentFragrance} = this.props;
    if(Object.keys(currentFragrance).length===0){
      return <div>Loading...</div>
    }
    console.log(currentFragrance);
    return (
      <div>
        <CommentForm/>
        <CommentTimeLine comments={currentFragrance.comments}/>
      </div>
    )
  }
}

export default CommentSection;