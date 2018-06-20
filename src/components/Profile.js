import React, { Component } from "react";
import anonymous from "../images/Anonymous.jpg";
import { apiCall } from "../services/api";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProfile: {}
    };
  }

  componentWillMount() {
    apiCall("get", `/api/users/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);

        this.setState({ currentProfile: res.data });
      })
      .catch(err => {
        this.props.history.push("/");
      });
  }

  render() {
    if (Object.keys(this.state.currentProfile).length === 0) {
      return (
        <div className="container mt-120">
          <div className="row mt-5 text-center">
            <div className="col-8">
              <h4 className="text-white">Loading...</h4>
            </div>
          </div>
        </div>
      );
    }

    const { currentProfile } = this.state;

    return (
      <header id="page-header">
        <div className="cell p-3">
          <div className="container">
            <div className="row">
              <div className="profile bg-dark m-auto col-xs-8 col-md-6 col-lg-5">
                <div className="background" />
                <div className="container">
                  <div className="d-md-flex row py-5">
                    <img
                      className="profile-img m-auto"
                      src={currentProfile.profileImageUrl || anonymous}
                      alt=""
                    />

                    <div className="m-auto col-sm-12">
                      <h6 className="font-weight-bold mt-3">Username:</h6>
                      <p className="font-italic text-muted-alien">{currentProfile.username} </p>

                      <h6 className="font-weight-bold mt-3">
                        Uploaded Fragrances:
                      </h6>
                      <p className="font-italic text-muted-alien">{currentProfile.fragrances.length} </p>
                      <h6 className="font-weight-bold mt-3">
                        Comments written:
                      </h6>
                      <p className="font-italic text-muted-alien">{currentProfile.comments.length} </p>
                      <h6 className="font-weight-bold mt-3">Role in FESN:</h6>
                      <p className="font-italic text-muted-alien">
                        {currentProfile.communityRole}{" "}
                      </p>
                      <h6 className="font-weight-bold mt-3 mb-3">
                        {" "}
                        Social Media:
                      </h6>
                      <ul className="inline-list social-buttons">
                        <li className="list-inline-item p-1">
                          <a
                            href={
                              currentProfile.socialMediaLinks.facebook ||
                              "https://facebook.com"
                            }
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item p-1">
                          <a
                            href={
                              currentProfile.socialMediaLinks.youtube ||
                              "https://youtube.com"
                            }
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li className="list-inline-item p-1">
                          <a
                            href={
                              currentProfile.socialMediaLinks.twitter ||
                              "https://twitter.com"
                            }
                          >
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
  }
}

export default Profile;
