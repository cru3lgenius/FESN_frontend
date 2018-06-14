import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="container-fluid mb-5 bg-black p-5">
      <div className="row text-white text-center mb-5">
        <div className="col-12">
          <h1 className="font-weight-bold">
            Our Services
          </h1>
        </div> 
      </div>
      <div className="d-flex justify-content-center text-center text-white row">
        <div className="col-md-6 col-lg-4 p-2">
          <i className="fab fa-connectdevelop mb-4" />
          <h3>KEEP YOU CONNECTED</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            repellat?
          </p>
        </div>
        <div className="col-md-6 col-lg-4 p-2">
          <i className="fas fa-database mb-4" />
          <h3>RICH CONTENT</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="p-2 col-md-6 col-lg-4 ">
          <i className="far fa-clock mb-4" />
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
