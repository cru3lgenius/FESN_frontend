import {SET_CURRENT_USER, ADD_ERROR} from '../actionTypes';
import apiCall from '../../services/api';
import {addError,removeError} from './errors';


const root_URL = '/api/auth/';

function authActionCreator(user){
  return{
    type:SET_CURRENT_USER,
    user
  }
}

export function loginUser (path,email,password){
  return (dispatch) => {
    return new Promise((resolve,reject)=>{
      apiCall("post",`${root_URL}${path}`,{email,password})
      .then((user)=>{
        dispatch(authActionCreator(user));
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