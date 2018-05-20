import {SET_CURRENT_USER, ADD_ERROR} from '../actionTypes';
import {apiCall} from '../../services/api';
import {addError,removeError} from './errors';


const root_URL = '/api/auth/';

function setCurrentUser(user){
  return{
    type:SET_CURRENT_USER,
    user
  }
}

export function authUser (path,email,password){
  return (dispatch) => {
    return new Promise((resolve,reject)=>{
      apiCall("post",`${root_URL}${path}`,{email,password})
      .then(({token,...user})=>{
        localStorage.setItem('jwtToken',token);
        dispatch(setCurrentUser(user));
        dispatch(removeError());
        resolve();
      })
      .catch((err)=>{
        dispatch(addError(err.message));
        reject();
      });  
    });
  }
}


export function logout(){
  return (dispatch)=>{
    localStorage.clear();
    dispatch(setCurrentUser({}));
  }
}