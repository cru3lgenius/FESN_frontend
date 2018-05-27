import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(ComponentToBeRendered){
  
  class Authenticate extends Component{
    componentWillMount(){
      if(this.props.isAuthenticated===false){
        this.props.history.push('/signin');
      }
    }
    componentWillUpdate(nextProps){
      if(nextProps.isAuthenticated===false){
        nextProps.history.push('/signin');
      }
    }
    render(){
      if(!this.props.isAuthenticated)
        return <div> LOADING... </div>
      else
        return <ComponentToBeRendered {...this.props}/>
    }
  }

  function mapStateToProps(state){
    return {
      isAuthenticated:state.currentUser.isAuthenticated
    }
  }
  
  return connect(mapStateToProps,null)(Authenticate);
}