import React from "react";
import DefaultFragranceImage from "../images/default-fragrance-image.jpg";
import { Link } from "react-router-dom";

const FragranceItem = ({
  id,
  name, 
  fragranceImage
}) => (
  <div className="col-sm-6 col-lg-4 col-xl-3">
    <Link className="fragrance-item d-block mx-auto" to={`/fragrances/${id}`}>
      <div className="d-flex position-absolute  h-100 w-100 fragrance-item-caption">
        <div className="fragrance-item-caption-content text-white m-auto">
          <i className="fas fa-plus" />
        </div>
      </div>
      <img
        className="img-fluid"
        src={fragranceImage || DefaultFragranceImage}
        alt={name}
      />
    </Link>
  </div>
);

export default FragranceItem;
