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
