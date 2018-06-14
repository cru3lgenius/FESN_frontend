import React from "react";

const FragranceSection = ({ currentFragrance }) => {
  return (
    <section
      id="fragrance-list"
      className="container mt-5 mb-5"
    >
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <img
              className="card-img-top"
              src={currentFragrance.imageUrl}
              alt={currentFragrance.name}
            />
            <h4 className="mt-3">Description:</h4>
            <p className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              quidem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FragranceSection;
