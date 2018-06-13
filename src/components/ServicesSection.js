import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="container-fluid mt-5 mb-5 bg-secondary">
      <div className="row">
        <h3 id="fragrancelist">Our Services</h3>
      </div>
      <div className="row">
        <div className="underline" />
      </div>
      <div className="d-flex justify-content-center text-center row">
        <div className="col-md-6 col-lg-4 p-2">
          <i className="fab fa-connectdevelop" />
          <h3>KEEP YOU CONNECTED</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            repellat?
          </p>
        </div>
        <div className="col-md-6 col-lg-4 p-2">
          <i className="fas fa-database" />
          <h3>RICH CONTENT</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="p-2 col-md-6 col-lg-4 ">
          <i className="far fa-clock" />
          <h3>UP-TO-DATE</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            obcaecati? Odit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
