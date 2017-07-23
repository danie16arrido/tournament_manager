import React from 'react';
import UserNavBar from '../components/UserNavBar';
import UserDataDisplay from '../components/UserDataDisplay'

class UserDataContainer extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div id="user-data-container">
        <UserNavBar></UserNavBar>
        <UserDataDisplay></UserDataDisplay>
      </div>
    )
  } 
}

export default UserDataContainer;