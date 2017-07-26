import React from 'react';
import store from '../store'
import { connect } from 'react-redux'

const LocationContainer = (props) => {
    return(
      <div id="location-container">
        <p>Location: {props.locationData.name}</p>
      </div>
    ) 
}

const mapStateToProps = state =>{
  return {
    locationData: state.locationData
  }
}

export default connect( mapStateToProps)(LocationContainer);