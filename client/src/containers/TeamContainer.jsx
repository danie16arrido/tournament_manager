import React from 'react';
import store from '../store'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
const style = {
  textAlign: 'center',
  width: '96%',
  height:'100%',
  margin: '0 auto',
  border: 20
  
};

const TeamContainer = (props) => {
    return(
      <Paper style={style} zDepth={3}>
        <div id="team-container">
        <List>  
          <ListItem>  
            {props.teamData.name}
          </ListItem>
        </List>
        <p></p>
      </div>
      </Paper>
    ) 
}

const mapStateToProps = state =>{
  return {
    teamData: state.teamData
  }
}


export default connect( mapStateToProps)(TeamContainer);