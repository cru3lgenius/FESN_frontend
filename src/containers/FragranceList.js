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
      <div className="container">
        <div className="row">
          <div class="container-fluid mt-5 mb-5 bg-light-gray">
            <div class="row">
              <h3>All Fragrances</h3>
            </div>
            <div class="row">
              <div class="underline"></div>
            </div>
          </div>
          {fragranceList}
        </div>
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