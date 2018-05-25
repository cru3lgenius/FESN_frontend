import React from 'react'

const FragranceSection = ({currentFragrance}) => {
  return (
    <div>
      Fragrance Section for:
        {currentFragrance.name}
    </div>
  )
}

export default FragranceSection;