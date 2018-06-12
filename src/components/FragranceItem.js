import React from 'react';
import DefaultFragranceImage from '../images/default-fragrance-image.jpg';
import {Link} from 'react-router-dom';

const FragranceItem = ({id,brand,name,date,uploadedBy,fragranceImage})=>(
    <div className="col-sm-6 col-lg-3">    
        <div className="card">
            <img className="card-img-top" src={fragranceImage || DefaultFragranceImage} alt={name}/>
            <div className="card-body">
                <h5>Brand: {brand} </h5>
                <h6>Name: {name} </h6>
                <h6> Uploaded By: {uploadedBy} </h6>
            </div> 
            <Link className="btn btn-primary btn-lg m-5" to={`/fragrances/${id}`}>
                More
            </Link>
        </div>
    </div>
)


export default FragranceItem;