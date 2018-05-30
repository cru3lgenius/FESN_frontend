import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store/actions/auth';

class Navbar extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top">
        <div className="container-fluid">
          <div className="navbar-brand">
              <Link className="nav-link" to="/"><img src="" alt="FESN Home"/></Link> 
          </div>
          <button className="navbar-toggler" data-target="#navbarResponsive" data-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarResponsive" className="navbar-collapse collapse">
            {this.props.currentUser.isAuthenticated ? (
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={`/fragrances/new`}>Add New Fragrance</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.logout}>Logout</a>
                </li>
              </ul>
            ):(
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link"  to="/signin">Login</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/signup">Register</Link>                       
                </li>
              </ul> 
            )}
          </div>
          
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps,{logout})(Navbar);