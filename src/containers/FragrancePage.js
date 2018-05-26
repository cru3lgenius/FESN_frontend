import React, {Component} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { apiCall } from '../services/api';
import FragranceSection from '../components/FragranceSection';
import CommentSection from '../components/CommentSection';

class FragrancePage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentFragrance:{}
    }
  }

  componentWillMount(){
    apiCall("get",`/api/fragrances/${this.props.match.params.id}`)
      .then(res=>this.setState({currentFragrance:res.data}))
      .catch(err=>{
        this.props.history.push('/');
      })
  }

  render(){
    
    if(Object.keys(this.state.currentFragrance).length===0){
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <FragranceSection currentFragrance={this.state.currentFragrance}/>
        <CommentSection currentFragrance={this.state.currentFragrance}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    fragrances:state.fragrances
  }
}

export default connect(mapStateToProps,null)(FragrancePage);