import React, { Component } from 'react'
import {connect} from 'react-redux';

import FragranceItem from '../components/FragranceItem';
import {fetchFragrances} from '../store/actions/fragrances';

class FragranceList extends Component {
  
  componentDidMount(){
    this.props.fetchFragrances();
  }
  
  render() {

    const fragranceList = this.props.fragrances.map((fragrance)=>(
      <FragranceItem
        key={fragrance._id}
        date={fragrance.createdAt}
        name={fragrance.name}
        brand={fragrance.brand}
        uploadedBy={fragrance.uploadedBy.username}
        fragranceImage={fragrance.imageUrl}
        id={fragrance._id}
      />
    ))

    return (
      <div>
        {fragranceList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    fragrances:state.fragrances
  }
}

export default connect(mapStateToProps,{fetchFragrances})(FragranceList);