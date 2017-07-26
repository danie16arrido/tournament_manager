import React from 'react';
import store from '../store'
import { connect } from 'react-redux'

const LocationContainer = (props) => {
    return(
      <div id="location-container">
      location: {props.locationData.lat} {props.locationData.lng}{props.locationData.name}{props.locationData.id}
      </div>
    ) 
}

const mapStateToProps = state =>{
  return {
    locationData: state.locationData
  }
}

export default connect( mapStateToProps)(LocationContainer);


// https://www.google.com/maps/embed/v1/view?key=AIzaSyALbGRHLfgb-MQwuasyHjE84oAvX_qLJwQ&center=-33.8569,151.2152&zoom=18&maptype=satellite