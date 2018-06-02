import React from 'react'
import {Link} from 'react-router-dom';

import FragranceList from '../containers/FragranceList';
import Footer from './Footer';
import Header from './Header';

const Homepage = ({currentUser})=>{
  if(!currentUser.isAuthenticated){
    return (
    <div className="home-hero">
      <h1>Welcome to the fragrance enthusiasts community!</h1>
      <h4>Are you new here?</h4>
      <Link to="/signup" className="btn btn-primary">
        Sign up here!
      </Link>
      <Footer/>
  </div>)
  }else{
    return (
      <div>
        <Header/>
        <FragranceList/>
        <Footer/>
      </div>
      
    )
  }
}

export default Homepage;