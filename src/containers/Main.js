import React from 'react'
import {Switch,Route,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import {removeError} from '../store/actions/errors';
import FragranceForm from './FragranceForm.js';
import withAuth from '../hocs/withAuth.js';
import FragrancePage from './FragrancePage';


const Main = (props) => {

  const {currentUser,authUser,errors,removeError} = props;

  return(
    <div className="container">
      <Switch>
        <Route exact path="/" render={props=><Homepage currentUser={currentUser} {...props}/>}/>  
        <Route exact path="/signin" render={props=>{
            return(<AuthForm errors={errors} {...props} removeError={removeError} onAuth={authUser} heading="Welcome Back!" buttonText={"Sign in"}/>)
          }}/>
        <Route exact path="/signup" render={props=>{
          return(<AuthForm errors={errors} removeError={removeError} onAuth={authUser} {...props} heading="Join The Fragrance Community Today!" buttonText={"Sign up"} signUp/>)
        }}/>
        <Route exact path="/fragrances/new" component={withAuth(FragranceForm)} />)
        }}/>
        <Route exact path ="/fragrances/:id" component={FragrancePage}/>
      </Switch>
    </div>
  )
}

function mapStateToProps(state){
  return {
    currentUser:state.currentUser,
    errors:state.errors
  }
}

export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));