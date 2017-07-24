import React from 'react';
import { connect } from 'react-redux'
import UserNavBar from '../components/UserNavBar';


const UserHeaderContainer = ( props ) => {
  
    return(
      <div> 
        <img src="http://si-www-footballmanager-com-shared.s3.amazonaws.com/styles/homepage_logos/s3/games/logos/fm17_logo.png?itok=R1KXJbAn" height="50" alt=""/>
        <div id="user-header">{ props.leagueName }</div>
        <UserNavBar></UserNavBar> 
      </div> 
    )
}

const mapStateToProps = state =>{
  return {
    leagueName: state.league_name,
  }
}

export default connect( mapStateToProps )(UserHeaderContainer);