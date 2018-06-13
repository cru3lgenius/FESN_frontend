import React from 'react'
import team_member_1 from '../images/team/1.jpg';

const TeamSection = () => {
  return (
    <section id="team" className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-uppercase display-6">Our Amazing Team</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center row">
        <div className="col-md-4 col-sm-6">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={team_member_1} alt=""/>
            <h4>Johny Cash</h4>
            <p className="text-muted">
              Designer
            </p>
            <ul className="inline-list">
              <li className="list-inline-item">
                facebook
              </li>
              <li className="list-inline-item">
                facebook
              </li>
              <li className="list-inline-item">
              facebook
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">Oliver Stone</div>
        <div className="col-md-4 col-sm-6">Jessica Alba</div>
      </div>
    </section>
  )
}

export default TeamSection;