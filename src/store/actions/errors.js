import {ADD_ERROR,REMOVE_ERROR} from '../actionTypes';

export function addError(errorMessage){
  return {
    type:ADD_ERROR,
    errorMessage
  }
}

export function removeError(){
  return {
    type:REMOVE_ERROR
  }
}