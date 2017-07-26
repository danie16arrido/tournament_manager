import React from 'react';
import store from '../store'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { getApiTeamData, getApiLocationData } from '../actions/actionCreators.js'
import { bindActionCreators } from 'redux'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const UserDataDisplay = ( props ) => {
    return(
      <div>
        <Table >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Time</TableHeaderColumn>
              <TableHeaderColumn>Home</TableHeaderColumn>
              <TableHeaderColumn>Away</TableHeaderColumn>
              <TableHeaderColumn>Venue</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          {props.matches.map( function( match, index ){
          return <TableRow key={index}>
      
                  <TableRowColumn> {match.date}</TableRowColumn>
                  <TableRowColumn>{match.time.slice(11,16)}</TableRowColumn>
                  <TableRowColumn ><Link to="team" onClick={() => {props.getApiTeamData(match.home.id)}}>{match.home.name}</Link></TableRowColumn>
                  <TableRowColumn><Link to="team" onClick={() => {props.getApiTeamData(match.away.id)}}>{match.away.name}</Link></TableRowColumn>
                  <TableRowColumn><Link to="location" onClick={() => {props.getApiLocationData(match.location.id)}}>{match.location.name}</Link></TableRowColumn> 
                </TableRow>
        })}
          </TableBody>
        </Table>
      </div>
    )
}
 
const mapStateToProps = state =>{
  return {
    matches: state.league_matches
  }
}

const mapDispatchToProps = dispatch => {
  return {
        ...bindActionCreators({ getApiTeamData, getApiLocationData }, dispatch)
    }

  // return {
  //   getApiTeamData(teamId) {
  //     dispatch( getApiTeamData(teamId))
  //   }
  // }
}
export default connect( mapStateToProps, mapDispatchToProps )(UserDataDisplay);