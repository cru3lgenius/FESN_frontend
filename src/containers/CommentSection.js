import React, { Component } from 'react'
import {connect} from 'react-redux';

import CommentsList from '../components/CommentsList';
import CommentForm from './CommentForm';
import {postNewComment,deleteComment} from '../store/actions/fragrances';

class CommentSection extends Component {


  constructor(props){
    super(props);
    this.state = {
      comments:this.props.currentFragrance.comments
    }
    this.handleNewComment = this.handleNewComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  
  handleNewComment(event,newComment){

    event.preventDefault();
    const {currentUser,currentFragrance} = this.props;
    const comment = {
      author:{
        username:currentUser.user.username,
        id:currentUser.user.id
      },
      text:newComment,
      forFragrance:{
        brand:currentFragrance.brand,
        name:currentFragrance.name,
        id:currentFragrance._id
      }
    };
    
    this.props.postNewComment(comment,currentFragrance.id)
        .then(postedComment=>{
          this.setState({comments:[postedComment,...this.state.comments]});
        })
        .catch(err=>{});
    

  }

  handleDeleteComment(commentId){
     const {currentFragrance} = this.props;
     this.props.deleteComment(commentId,currentFragrance._id)
          .then(deletedComment=>{
            const newComments = this.state.comments.filter(c=>c._id!==commentId);
            this.setState({comments:newComments});
          })
          .catch(err=>{})
  }

  render() {

    const{currentFragrance,currentUser} = this.props;
    
    return (
      <div className="col-12">
        <CommentsList currentUserId={currentUser.user.id} handleDelete= {this.handleDeleteComment} comments={this.state.comments}/>
        <CommentForm handleNewComment={this.handleNewComment} currentFragrance={currentFragrance}/>
      </div>
    )
  }
}

 
function mapStateToProps(state){
  return {
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps,{postNewComment,deleteComment})(CommentSection);