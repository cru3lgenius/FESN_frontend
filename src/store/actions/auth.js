import {SET_CURRENT_USER} from '../actionTypes';
import {apiCall,setTokenHeader} from '../../services/api';
import {addError,removeError} from './errors';
import { fetchFragrances } from './fragrances';



//const root_URL = '/api/auth/';

export function setCurrentUser(user){
  return{
    type:SET_CURRENT_USER,
    user
  }
}

export function authUser (type,userData){
  return dispatch => {
    return new Promise((resolve,reject)=>{
      return apiCall("post",`/api/auth/${type}`,userData)
      .then(({data:{token,...user}})=>{
        localStorage.setItem("jwtToken",token);
        dispatch(setCurrentUser(user));
        dispatch(removeError());
        resolve();
      })
      .catch(err=>{
        dispatch(addError(err.message));
        reject();
      })
    })
  }
}


export function logout(){
  return (dispatch)=>{
    localStorage.clear();
    dispatch(setCurrentUser({}));
  }
}


export function setAuthorizationToken(token){
  setTokenHeader(token);
}