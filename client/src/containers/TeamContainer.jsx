import React from 'react';
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ImageStyle from 'material-ui/svg-icons/image/style';
import SocialMood from 'material-ui/svg-icons/social/mood';

const style = {
  textAlign: 'center',
  width: '96%',
  margin: '0 auto',
  border: 20
  
};

const TeamContainer = (props) => {
    return(
      <Paper style={style} zDepth={3} >
        <List>
          <Subheader ><h3>{props.teamName} s Players</h3></Subheader>
            {props.teamPlayers.map( function( player, index ){
              return(
                <ListItem key={index}
                  leftAvatar={<Avatar src="http://scna2012.softwarecraftsmanship.com/images/robert.jpg" />}
                  rightIcon={<ActionInfo />}
                  primaryText={player.name + " " + player.last_name }
                  secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Height: {player.height}m Weight: {player.weight}Kg Age: {player.age}  </span>
                       
                    </p>
                  }
                  secondaryTextLines={2}
                  >
                  <Badge
                      badgeContent={0}
                      primary={true}
                      badgeStyle={{color:"black", background: "red"}}
                    >
                      <ImageStyle />
                    </Badge>
                    <Badge
                      badgeContent={4}
                      primary={true}
                      badgeStyle={{color:"black", background: "yellow"}}
                    >
                      <ImageStyle />
                    </Badge>
                    <Badge
                      badgeContent={6}
                      primary={true}
                      badgeStyle={{color:"black", background: "green"}}
                    >
                      <SocialMood />
                    </Badge>
              </ListItem>
               
                  
              )
            })}      
        </List>
      </Paper>
    ) 
}

const mapStateToProps = state =>{
  return {
    teamName: state.teamName,
    teamPlayers: state.teamPlayers
  }
}


export default connect( mapStateToProps)(TeamContainer);