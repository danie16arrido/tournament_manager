import React from 'react';
import { connect } from 'react-redux'

const UserHeaderContainer = ( props ) => {
    return(
      <div id="user-header"> { props.leagueName }  {props.leagueID}</div>
    )
}

const mapStateToProps = state =>{
  return {
    leagueName: state.league_name,
    leagueID: state.league_id
  }
}

export default connect( mapStateToProps )(UserHeaderContainer);