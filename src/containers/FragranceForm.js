import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewFragrance } from "../store/actions/fragrances";

class FragranceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      name: "",
      uploadedBy: {},
      imageUrl: "",
      description: "",
      occasion: "",
      season: "",
      performance: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const fragranceBody = {
      ...this.state,
      uploadedBy: {
        username: this.props.currentUser.username,
        id: this.props.currentUser.id
      }
    };
    this.props.postNewFragrance(fragranceBody);
    this.setState({
      brand: "",
      name: "",
      uploadedBy: {},
      imageUrl: "",
      description: "",
      occasion: "",
      season: "",
      performance: ""
    });
    this.props.history.push("/");
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      brand,
      name,
      imageUrl,
      description,
      occasion,
      performance,
      season
    } = this.state;
    return (
      <div className="container mt-120 text-center text-white">
        <h2 className="font-weight-bold mb-3">NEW FRAGRANCE</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row m-5">
            <div className="col">
              <div className="form-group">
                <label htmlFor="brand">Brand:</label>

                <input
                  className="form-control"
                  id="brand"
                  name="brand"
                  value={brand}
                  placeholder="Brand"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="name">Name:</label>

                <input
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
              </div>
            </div>
          </div>

          <div className="form-row m-5">
            <div className="col">
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL:</label>

                <input
                  id="imageUrl"
                  className="form-control"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={this.handleChange}
                  placeholder="Image URL"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="season">Season:</label>
                <select
                  id="season"
                  className="form-control"
                  name="season"
                  value={season}
                  placeholder="Season"
                  onChange={this.handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row m-5">
            <div className="col">
              <div className="form-group">
                <label htmlFor="occasion">Occasion:</label>
                <select
                  id="occasion"
                  className="form-control"
                  name="occasion"
                  value={occasion}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="Formal">Formal</option>
                  <option value="Casual">Casual</option>
                  <option value="With Friends">With Friends</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="performance">Performance:</label>
                <select
                  required
                  id="performance"
                  className="form-control"
                  name="performance"
                  value={performance}
                  onChange={this.handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="Weak">Weak</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Strong">Strong</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <p className="mx-auto">Description:</p>
          </div>
          <div className="row p-2">
            <textarea
              rows="4"
              id="description"
              className="form-control mx-5"
              name="description"
              value={description}
              onChange={this.handleChange}
              placeholder="Description"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user
  };
}

export default connect(
  mapStateToProps,
  { postNewFragrance }
)(FragranceForm);
