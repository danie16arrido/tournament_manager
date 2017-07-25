import React from 'react';
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

const LogoName = ( props ) => {
    return(
      <div id="user-league-logo">
        <Link to="/matches"><img src="http://si-www-footballmanager-com-shared.s3.amazonaws.com/styles/homepage_logos/s3/games/logos/fm17_logo.png?itok=R1KXJbAn" height="50" alt=""/></Link>
      </div>
    )
}

const mapStateToProps = state =>{
  return {
    leagueName: state.league_name,
  }
}

export default connect( mapStateToProps )(LogoName);


