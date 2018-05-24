import {apiCall} from '../../services/api';
import { addError } from './errors';
import { LOAD_FRAGRANCES } from '../actionTypes';


function loadFragrances(fragrances){
  return{
    type:LOAD_FRAGRANCES,
    fragrances
  }
}

export function postNewFragrance(fragranceBody){
  return (dispatch,getState) => {
    return apiCall("post",`/api/fragrances/`,fragranceBody)
          .then(res=>{})
          .catch(err=>{
            dispatch(addError(err.message))
          });
  }
}

export function fetchFragrances(){
  return dispatch => {
    return apiCall("get",`/api/fragrances/`)
            .then(res=>{
              const fragrances = res.data;
              dispatch(loadFragrances(fragrances));
            })
            .catch((err)=>{
              dispatch(addError(err.message));
            });
  }
}