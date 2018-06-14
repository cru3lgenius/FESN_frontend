import React, { Component } from 'react'
import {connect} from 'react-redux';

import FragranceItem from '../components/FragranceItem';
import {fetchFragrances} from '../store/actions/fragrances';

class FragranceListSection extends Component {
  
  componentDidMount(){
    this.props.fetchFragrances();
  }
  
  render() {

    const fragranceList = [];
    const hiddenFragrances = [];
    const {fragrances} = this.props;
    for(var i = 0 ; i < fragrances.length; i++){
      if(i<3){
        const fragrance = fragrances[i];
        fragranceList.push(
          <FragranceItem
            key={fragrance._id}
            date={fragrance.createdAt}
            name={fragrance.name}
            brand={fragrance.brand}
            uploadedBy={fragrance.uploadedBy.username}
            fragranceImage={fragrance.imageUrl}
            id={fragrance._id}
          />
        );
      }
      else{
        const fragrance = fragrances[i];
        hiddenFragrances.push(
          <FragranceItem
            key={fragrance._id}
            date={fragrance.createdAt}
            name={fragrance.name}
            brand={fragrance.brand}
            uploadedBy={fragrance.uploadedBy.username}
            fragranceImage={fragrance.imageUrl}
            id={fragrance._id}
          />
        );
      }   
    }
     

    return (
      <div  className="container-fluid bg-white p-5">
        <div className="row">
          <div className="container-fluid mb-5 bg-light-gray">
            <div className="row text-center">
              <div className="col-12">
                <h1 className="font-weight-bold">All Fragrances</h1>
              </div>
            </div>
          </div>
          <div className="row">
          {fragranceList}
          </div>
          {hiddenFragrances.length !== 0 ? (
          <div className="container">
            <div id="hiddenFragrances" className="row py-5 collapse">
              {hiddenFragrances}
            </div> 
            <div className="row">
              <button data-toggle="collapse" data-target="#hiddenFragrances" className="btn btn-outline-success m-3 col-sm-12">More</button>
            </div>
          </div>
          ) :(<div></div>)}
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

export default connect(mapStateToProps,{fetchFragrances})(FragranceListSection);