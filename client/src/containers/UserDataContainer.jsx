import React from 'react';
import UserDataDisplay from '../components/UserDataDisplay'
import Paper from 'material-ui/Paper';
const style = {
  textAlign: 'center',
  width: '80%',
  margin: '0 auto',
  border: 20
  
};
const UserDataContainer = (props) => {
    return(
      <Paper style={style} zDepth={3} >

        <UserDataDisplay></UserDataDisplay>
      </Paper>
    ) 
}


export default UserDataContainer;
