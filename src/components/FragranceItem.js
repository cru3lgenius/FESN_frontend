import React from 'react';
import DefaultFragranceImage from '../images/default-fragrance-image.jpg';
import {Link} from 'react-router-dom';

const FragranceItem = ({id,brand,name,date,uploadedBy,fragranceImage})=>(
  <Link to={`/fragrances/${id}`} className="fragrance-item">
    <li className="list-group-item">
      <img height="150" width="150" src={fragranceImage || DefaultFragranceImage} alt={name}/>
      <div className="fragrance-area">
        <div>Brand: {brand} </div>
        <div>Name: {name} </div>
        <div> Uploaded By: {uploadedBy} </div>
      </div> 
    </li>
  </Link>
)


export default FragranceItem;