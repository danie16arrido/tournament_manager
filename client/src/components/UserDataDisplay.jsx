import React from 'react';
import store from '../store'
import { connect } from 'react-redux'

const UserDataDisplay = ( props ) => {
    return(
      <div id="user-data-display">
        {props.matches.map( function( match, index ){
          return <div key={index}>
            Home:{match.home.name}  
            Away: {match.away.name}
            Date: {match.date}
            Time: {match.time.slice(11,16)}
          </div>
        })}
      </div>
    )
}



const mapStateToProps = state =>{
  return {
    matches: state.league_matches
  }
}
export default connect( mapStateToProps )(UserDataDisplay);