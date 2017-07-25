import React from 'react';
import {Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import ActionToday from 'material-ui/svg-icons/action/today';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionAssesment from 'material-ui/svg-icons/action/assessment';



class UserNavBar extends React.Component {
  render() {
    return(
      <div id="user-nav-bar">
        <Tabs>
        <Tab 
          value={0} 
          label="Matches" 
          containerElement={<Link to="/matches"/>} 
          icon={<ActionToday/>}
        />
        <Tab 
          value={1} 
          label="Table" 
          containerElement={<Link to="/table"/>}
          icon={<ActionList/>}
        />
        <Tab 
          value={2} 
          label="Stats" 
          containerElement={<Link to="/stats"/>} 
          icon={<ActionAssesment/>}
        />
        </Tabs>
  
      </div>
    )
  }
}

export default UserNavBar;


