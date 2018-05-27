import React from 'react'

export default ({isCorrectUser,text,id,handleDelete}) => {
  return (
    <div>
      <li className="list-group-item list-group-item-secondary">
       {text}

       {isCorrectUser && (
          <button 
            onClick={()=>{handleDelete(id)}}       
            className="btn btn-danger">
              Delete
          </button>)}
        
      </li>
      
    </div>
  )
}
