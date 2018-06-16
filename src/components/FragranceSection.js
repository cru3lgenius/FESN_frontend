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

            <p className="card-body">
              <h6 className="font-weight-bold mt-3">Description:</h6>
              <p className="font-italic"> {currentFragrance.description}</p>
              <h6 className="font-weight-bold mt-3">Occasion:</h6>
              <p className="font-italic">{currentFragrance.occasion}</p>
              <h6 className="font-weight-bold mt-3">Season:</h6>
              <p className="font-italic"> {currentFragrance.season}</p>
              <h6 className="font-weight-bold mt-3">Performance:</h6>
              <p className="font-italic"> {currentFragrance.performance}</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FragranceSection;
