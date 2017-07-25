import React from 'react';
import { connect } from 'react-redux'
import UserNavBar from '../components/UserNavBar';
import LeagueName from '../components/LeagueName'
import LeagueLogo from '../components/LeagueLogo'
const UserHeaderContainer = ( props ) => {

    return(
      <div> 
        <LeagueLogo></LeagueLogo>
        <LeagueName></LeagueName>
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