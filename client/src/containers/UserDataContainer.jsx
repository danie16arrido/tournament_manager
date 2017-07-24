import React from 'react';
import UserNavBar from '../components/UserNavBar';
import UserDataDisplay from '../components/UserDataDisplay'

const UserDataContainer = () => {
    return(
      <div id="user-data-container">
        <UserDataDisplay></UserDataDisplay>
      </div>
    ) 
}


export default UserDataContainer;
