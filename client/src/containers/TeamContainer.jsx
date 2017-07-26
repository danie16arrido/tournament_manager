import React from 'react';
import store from '../store'
import { connect } from 'react-redux'

const TeamContainer = (props) => {
    return(
      <div id="team-container">
        <p>Team Details : {props.teamData.name}_</p>
      </div>
    ) 
}

const mapStateToProps = state =>{
  return {
    teamData: state.teamData
  }
}


export default connect( mapStateToProps)(TeamContainer);