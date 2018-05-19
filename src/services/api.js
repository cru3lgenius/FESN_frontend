import axios from 'axios';


export function apiCall(method,path,data){
  return new Promise((resolve,reject)=>{
    axios[method](path,data)
              .then((data)=>{
                return resolve(data);
              })
              .catch((err)=>{
                return reject(err.response.data.err)
              })
  })
}
