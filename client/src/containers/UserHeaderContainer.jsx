import React from 'react';
import { connect } from 'react-redux'

const UserHeaderContainer = ( props ) => {
    return(
      <div id="user-header"> { props.league_name }</div>
    )
}

const mapStateToProps = state =>{
  return {
    league_name: state.league_name
  }
}

export default connect( mapStateToProps )(UserHeaderContainer);