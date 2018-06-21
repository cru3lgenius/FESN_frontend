import React from "react";

const FragranceSection = ({ currentFragrance }) => {
  return (
    <section id="fragrance-list" className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <img
              className="card-img-top"
              src={currentFragrance.imageUrl}
              alt={currentFragrance.name}
            />
            <hr className="bg-secondary" />
            <div className="text-center">
              <p className="font-weight-bold ">{currentFragrance.name}</p>
              <p className="font-italic  "> by: {currentFragrance.brand}</p>
            </div>

            <hr className="bg-secondary" />
            <div className="card-body">
              <h6 className="font-weight-bold mt-1">Description:</h6>
              <p className="font-italic"> {currentFragrance.description}</p>
              <h6 className="font-weight-bold mt-3">Occasion:</h6>
              <p className="font-italic">{currentFragrance.occasion}</p>
              <h6 className="font-weight-bold mt-3">Season:</h6>
              <p className="font-italic"> {currentFragrance.season}</p>
              <h6 className="font-weight-bold mt-3">Performance:</h6>
              <p className="font-italic"> {currentFragrance.performance}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FragranceSection;
