import React, { Component } from 'react'
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';

const Main = (props) => {
  const {currentUser} = props;
  return(
    <div className="container">
      <Switch>
        <Route exact path="/" render={props=><Homepage currentUser={currentUser} {...props}/>}/>
      </Switch>
    </div>
  )
}

function mapStateToProps(state){
  return{
    currentUser:state.currentUser,
    errors:state.errors
  }
}

export default connect(mapStateToProps,null)(Main);