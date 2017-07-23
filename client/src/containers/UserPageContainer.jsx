import React from 'react';
import UserHeaderContainer from './UserHeaderContainer';
import UserDataContainer from './UserDataContainer';

class UserPageContainer extends React.Component {
  constructor(){
    super()
  }

  // addData( leagueName) {
  //   store.dispatch(
  //     {
  //       type: "SHOW_LEAGUE_NAME",
  //       league_name:leagueName
  //     }
  //   )
  // }
  render(){
    return(
      <div id="user-page-container">
        <UserHeaderContainer/>
        <UserDataContainer></UserDataContainer>
      </div>
    )
  } 
}

export default UserPageContainer;