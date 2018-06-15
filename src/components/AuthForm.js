import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      profileImageUrl: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
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
      username: ""
    });
  }

  render() {
    const { password, username, email, profileImageUrl } = this.state;
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
              <label className="m-3" htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={this.handleChange}
              />

              <label className="m-3" htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={this.handleChange}
                value={password}
              />

              {signUp && (
                <div>
                  <label className="m-3" htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={this.handleChange}
                  />

                  <label className="m-3" htmlFor="image-url">Image URL:</label>
                  <input
                    type="text"
                    id="image-url"
                    name="profileImageUrl"
                    className="form-control"
                    value={profileImageUrl}
                    onChange={this.handleChange}
                  />
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
