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
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
              <Link to="/"><img src="" alt="FESN Home"/></Link> 
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={`/fragrances/new`}>Add New Fragrance</Link>
              </li>
              <li>
                <a onClick={this.logout}>Logout</a>
              </li>
            </ul>
          ):(
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/signin">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>                       
              </li>
            </ul> 
          )}
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