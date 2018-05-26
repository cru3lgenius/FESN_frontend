import React, { Component } from 'react'
import {connect} from 'react-redux';

import CommentTimeLine from './CommentTimeLine';
import CommentForm from '../containers/CommentForm';
import {postNewComment} from '../store/actions/fragrances';

class CommentSection extends Component {


  constructor(props){
    super(props);
    this.state = {
      comments:this.props.currentFragrance.comments
    }
    this.handleNewComment = this.handleNewComment.bind(this);
  }
  
  handleNewComment(event,newComment){

    event.preventDefault();
    console.log(newComment);
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

  render() {

    const{currentFragrance,currentUser} = this.props;
    
 
    return (
      <div>
        {currentUser.isAuthenticated ? (
          <CommentForm handleNewComment={this.handleNewComment} currentFragrance={currentFragrance}/>
        ): (
           <h3>To Write a Comment you need to sign in!</h3>
        ) }
        
        <ul className="list-group">
          <CommentTimeLine comments={this.state.comments}/>
        </ul> 
      </div>
    )
  }
}

 
function mapStateToProps(state){
  return {
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps,{postNewComment})(CommentSection);