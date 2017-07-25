import React from 'react';
import { connect } from 'react-redux'

const LeagueName = ( props ) => {
    return(
      <div id="user-league-name">
        <div id="user-league-name">{ props.leagueName }</div>
      </div>
    )
}

const mapStateToProps = state =>{
  return {
    leagueName: state.league_name,
  }
}

export default connect( mapStateToProps )(LeagueName);
