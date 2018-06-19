import React from "react";
import team_member_1 from "../images/team/1.jpg";

const Profile = () => {
  return (
    <header id="page-header">
      <div className="cell p-3">
        <div className="container">
          <div className="row">
            <div className="profile m-auto col-md-8">
              <div className="container">
                <div className="d-md-flex row">
                  <img className="m-auto m-lg-0" src={team_member_1} alt="" />

                  <div className="m-auto col-sm-12 col-md-6">
                    <h6 className="font-weight-bold mt-3">Username:</h6>
                    <p className="font-italic text-muted-alien">eliexao </p>
                    <h6 className="font-weight-bold mt-3">
                      Uploaded Fragrances:{" "}
                    </h6>
                    <p className="font-italic text-muted-alien">5 </p>
                    <h6 className="font-weight-bold mt-3">Comments written:</h6>
                    <p className="font-italic text-muted-alien">15 </p>
                    <h6 className="font-weight-bold mt-3"> Social Media:</h6>

                    <ul className="inline-list social-buttons">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Profile;
