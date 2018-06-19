import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      profileImageUrl: "",
      username: "",

      facebook: "",
      youtube: "",
      twitter: "",
      communityRole: "Fragrance Enthusiast"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      email:this.state.email,
      username:this.state.username,
      profileImageUrl:this.state.profileImageUrl,
      password:this.state.password,
      socialMediaLinks:{
        facebook:this.state.facebook,
        youtube:this.state.youtube,
        twitter:this.state.twitter
      },
      communityRole:this.state.communityRole
    } 
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, payload)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });

    this.setState({
      email: "",
      password: "",
      profileImageUrl: "",
      username: "",

      facebook: "",
      youtube: "",
      twitter: ""
    });
  }

  render() {
    const { password, username, email, profileImageUrl, facebook,youtube,twitter } = this.state;
 
    const {
      signUp,
      buttonText,
      heading,
      errors,
      history,
      removeError
    } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div className="container mt-120 text-white">
        <div className="row justify-content-md-center text-center">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              <h2 className="p-2">{heading}</h2>
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
              )}
              <label className="m-3" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={this.handleChange}
                required
              />

              <label className="m-3" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={this.handleChange}
                value={password}
                required
              />

              {signUp && (
                <div>
                  <label className="m-3" htmlFor="username">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value={username}
                    required
                    onChange={this.handleChange}
                  />

                  <label className="m-3" htmlFor="image-url">
                    Image URL:
                  </label>
                  <input
                    type="text"
                    id="image-url"
                    name="profileImageUrl"
                    className="form-control"
                    value={profileImageUrl}
                    onChange={this.handleChange}
                  />

                  <div className="row mt-3">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="facebook-link">Facebook:</label>
                        <input
                          type="text"
                          placeholder="Your account"
                          id="facebook-link"
                          value={facebook}
                          onChange={this.handleChange}
                          name="facebook"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="twitter-link">Twitter:</label>
                        <input
                          type="text"
                          placeholder="Your account"
                          id="twitter-link"
                          value={twitter}
                          onChange={this.handleChange}
                          name="twitter"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="youtube-link">Youtube:</label>
                        <input
                          type="text"
                          placeholder="Your account"
                          id="youtube-link"
                          value={youtube}
                          onChange={this.handleChange}
                          name="youtube"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button type="submit" className="btn btn-primary mt-4">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
