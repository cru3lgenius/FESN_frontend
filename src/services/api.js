import axios from 'axios';


export function apiCall(method,path,data){
  return new Promise((resolve,reject)=>{
    axios[method](path,data)
              .then(res=>{
                return resolve(res);
              })
              .catch((err)=>{
                return reject(err.response.data.error)
              })
  })
}

export function setTokenHeader(token){
  if(token){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }else{
    delete axios.defaults.headers.common["Authorization"];
  }
}