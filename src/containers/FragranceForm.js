import React, { Component } from 'react'
import {connect} from 'react-redux';
import {postNewFragrance} from '../store/actions/fragrances';

class FragranceForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      brand:"",
      name:"",
      uploadedBy:{},
      imageUrl:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const fragranceBody = {
      ...this.state,
      uploadedBy:{
        username:this.props.currentUser.username,
        id:this.props.currentUser.id
      }
    };
    this.props.postNewFragrance(fragranceBody);
    this.setState({
      brand:"",
      name:"",
      uploadedBy:{},
      imageUrl:""
    });
    this.props.history.push('/');
  }

  handleChange(event){
    event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
  }

  render() {
    const {brand,name,imageUrl} = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="brand">Brand:</label>
          <input
            className="form-control" 
            id="brand"
            name="brand"
            value={brand}
            onChange={this.handleChange}
          />
          <label htmlFor="name">Name:</label>
          <input 
            className="form-control"         
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="brand">Fragrance Image URL:</label>
          <input 
            id="imageUrl"
            className="form-control"           
            name="imageUrl"
            value={imageUrl}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">Submit!</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser:state.currentUser.user
  }
}

export default connect(mapStateToProps,{postNewFragrance})(FragranceForm);