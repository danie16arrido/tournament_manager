import React from 'react';
import store from '../store';
import { addLeagueName } from '../actions/actionCreators'

class UserHeaderContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      league_name: ""
    }
    store.subscribe(() => {
      this.setState({
        league_name: store.getState().league_name
      })
    })
  }
  
  componentDidMount(){
    store.dispatch( addLeagueName("DanielGarrido") )
  }

  render(){
    return(
      <div id="user-header"> { this.state.league_name }</div>
    )
  }
}

export default UserHeaderContainer;