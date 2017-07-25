import React from 'react';
import {Link} from 'react-router-dom'

class UserNavBar extends React.Component {
  render() {
    return(
      <div id="user-nav-bar">
        <ul>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/table">Table</Link></li>
          <li><Link to="/stats">Stats</Link></li>
        </ul>    
      </div>
    )
  }
}

export default UserNavBar;


