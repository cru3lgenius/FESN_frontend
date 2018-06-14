import React from 'react'
import {Link} from 'react-router-dom';

import FragranceList from '../containers/FragranceListSection';
import Footer from './Footer';
import HeaderSection from './HeaderSection';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';

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
        <HeaderSection/>
        <ServicesSection/>
        <FragranceList/>
        <TeamSection/>
        <Footer/>
      </div>
      
    )
  }
}

export default Homepage;