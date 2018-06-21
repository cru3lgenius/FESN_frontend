import React, { Component } from "react";
import { connect } from "react-redux";

import FragranceItem from "../components/FragranceItem";
import { fetchFragrances } from "../store/actions/fragrances";

class FragranceListSection extends Component {
  componentDidMount() {
    this.props.fetchFragrances();
  }

  render() {
    const fragranceList = this.props.fragrances.map(fragrance => (
      <FragranceItem
        key={fragrance._id}
        date={fragrance.createdAt}
        name={fragrance.name}
        brand={fragrance.brand}
        uploadedBy={fragrance.uploadedBy.username}
        fragranceImage={fragrance.imageUrl}
        id={fragrance._id}
      />
    ));

    return (
      <div className="container-fluid bg-white p-5">
        <div className="row">
          <div className="container-fluid mb-5 bg-light-gray">
            <div className="row text-center">
              <div className="col-12">
                <h1 className="font-weight-bold">All Fragrances</h1>
              </div>
            </div>
          </div>
          <div className="row">{fragranceList}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fragrances: state.fragrances
  };
}

export default connect(
  mapStateToProps,
  { fetchFragrances }
)(FragranceListSection);
