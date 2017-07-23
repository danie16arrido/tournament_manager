import React from 'react';
import store from '../store'

class UserDataDisplay extends React.Component {
  constructor(){
    super()
    this.state = {
      name: ""
    }
    store.subscribe(() =>{
      this.setState(
        {
          name: store.getState.name
        }
      )
    })
  }

  render() {
    return(
      <div id="user-data-display">Data</div>
    )
  }
}

export default UserDataDisplay;