import { LOAD_FRAGRANCES } from "../actionTypes";



export default function (state=[],action){
  switch(action.type){
    case LOAD_FRAGRANCES:
      return [...action.fragrances]
    default:
      return state
  }  
}