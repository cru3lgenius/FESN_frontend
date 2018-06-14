import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../store/actions/auth";
 

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    
    let authNavbarLinks = (
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={`/fragrances/new`}>
            NEW FRAGRANCE
          </Link>
        </li>
        <li className="nav-item">
          <a href="#services" className="js-scroll-trigger nav-link">
            SERVICES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#team">
            TEAM
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={this.logout}>
            LOGOUT
          </a>
        </li>
      </ul>
    );

    if (this.props.location.pathname !== "/")
      authNavbarLinks = (
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={`/fragrances/new`}>
              NEW FRAGRANCE
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.logout}>
              LOGOUT
            </a>
          </li>
        </ul>
      );

    return (
      <nav
        id="main-nav"
        className="navbar navbar-expand-md navbar-light fixed-top"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="nav-link" to="/">
              <img src="" alt="FESN Home" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            data-target="#navbarResponsive"
            data-toggle="collapse"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div id="navbarResponsive" className="navbar-collapse collapse">
            {this.props.currentUser.isAuthenticated ? (
              authNavbarLinks
            ) : (
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Navbar)
);
