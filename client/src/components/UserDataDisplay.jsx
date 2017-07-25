import React from 'react';
import store from '../store'
import { connect } from 'react-redux'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const UserDataDisplay = ( props ) => {
    return(
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
                  <TableRowColumn>{match.home.name}</TableRowColumn>
                  <TableRowColumn>{match.away.name}</TableRowColumn>
                  <TableRowColumn>Location{index}</TableRowColumn>          
                </TableRow>
        })}
          </TableBody>
        </Table>
    )
}
  
const mapStateToProps = state =>{
  return {
    matches: state.league_matches
  }
}
export default connect( mapStateToProps )(UserDataDisplay);