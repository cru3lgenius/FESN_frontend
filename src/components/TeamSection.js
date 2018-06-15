import React from "react";
import team_member_1 from "../images/team/1.jpg";
import team_member_2 from "../images/team/2.jpg";
import team_member_3 from "../images/team/3.jpg";


const TeamSection = () => {
  return (
    <section id="team" className="container p-5">
      <div className="row text-center text-white mb-5">
         <div className="col-12">
            <h1 className="font-weight-bold">Our Team</h1>
         </div>
      </div>
      <div className="d-flex justify-content-center row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="team-member">
            <img
              className="mx-auto rounded-circle"
              src={team_member_1}
              alt=""
            />
            <h4 className="text-white">Tommy Johnes</h4>
            <p className="text-muted-alien">Web Developer</p>
            <ul className="inline-list social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="team-member">
            <img
              className="mx-auto rounded-circle"
              src={team_member_2}
              alt=""
            />
            <h4 className="text-white">Ellie Xao</h4>
            <p className="text-muted-alien">Fragrance Reviewer</p>
            <ul className="inline-list social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div><div className="col-sm-12 col-md-6 col-lg-4">
          <div className="team-member"> 
            <img
              className="mx-auto rounded-circle"
              src={team_member_3}
              alt=""
            />
            <h4 className="text-white">Matt Balley</h4>
            <p className="text-muted-alien">Web Designer</p>
            <ul className="inline-list social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
