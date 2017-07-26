import React from 'react';
import store from '../store'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';


import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MapsBeenHere from 'material-ui/svg-icons/maps/beenhere';
import MapsDirections from 'material-ui/svg-icons/maps/directions';

const style = {
  textAlign: 'center',
  width: '96%',
  margin: '0 auto',
  border: 20
  
};

const LocationContainer = (props) => {
    return(
      <Paper style={style} zDepth={3} >       
        <List>    
          <ListItem
            rightIcon={<MapsDirections />}
            leftAvatar={<Avatar src="https://cdn.getyourguide.com/img/tour_img-177246-145.jpg" />}
            primaryText={props.locationData.name}
            secondaryText={"Lat: " + props.locationData.lat + " Lng:" + props.locationData.lng}
          />
        </List>
      </Paper>
    ) 
}

const mapStateToProps = state =>{
  return {
    locationData: state.locationData
  }
}

export default connect( mapStateToProps)(LocationContainer);


// https://www.google.com/maps/embed/v1/view?key=AIzaSyALbGRHLfgb-MQwuasyHjE84oAvX_qLJwQ&center=-33.8569,151.2152&zoom=18&maptype=satelliteg