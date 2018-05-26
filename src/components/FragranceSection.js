import React from 'react'

const FragranceSection = ({currentFragrance}) => {

  return (
    <div className="row">
        <div className="col-md-9">
          <div className="card">
            <img className="card-img-top" src={currentFragrance.imageUrl} alt={currentFragrance.name}/>
          </div>
        </div>
      </div>
  )
}

export default FragranceSection;