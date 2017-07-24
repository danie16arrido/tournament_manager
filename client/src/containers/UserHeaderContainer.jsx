import React from 'react';
import { connect } from 'react-redux'

const UserHeaderContainer = ( props ) => {
  
    return(
      <div id="user-header">{ props.leagueName }</div>  
    )
}

const mapStateToProps = state =>{
  return {
    leagueName: state.league_name,
  }
}

export default connect( mapStateToProps )(UserHeaderContainer);