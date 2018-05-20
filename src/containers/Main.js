import React, { Component } from 'react'
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = (props) => {

  const {currentUser} = props;

  return(
    <div className="container">
      <Switch>
        <Route exact path="/" render={props=><Homepage currentUser={currentUser} {...props}/>}/>  
        <Route exact path="/signin" render={props=>{
            return(<AuthForm buttonText={"Sign in"}/>)
          }}/>
        <Route exact path="/signup" render={props=>{
          return(<AuthForm  buttonText={"Sign up"} signUp/>)
        }}/>
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

export default withRouter(connect(mapStateToProps,null)(Main));