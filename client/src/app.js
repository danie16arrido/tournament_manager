import React from 'react';
import ReactDOM from 'react-dom';

import StatsContainer from './containers/StatsContainer'
import TableContainer from './containers/TableContainer'
import UserHeaderContainer from './containers/UserHeaderContainer'
import UserHeaderDataContainer from './containers/UserDataContainer'


import store from './store'
import { Provider } from 'react-redux'

import { HashRouter, Route } from 'react-router-dom'

const leagueID = 9
import { getApiLeagueData, getApiLeagueName } from './actions/actionCreators'
store.dispatch(getApiLeagueName(leagueID))
store.dispatch(getApiLeagueData(leagueID))



import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {orange500, deepOrange500} from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500,
  },
  appBar: {
    height: 80,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={ store }>
      <HashRouter >
        <div>
        <Route path="/" component={UserHeaderContainer}/>  
        <Route exact path="/" component={UserHeaderDataContainer} />
        <Route path="/matches" component={UserHeaderDataContainer} />
        <Route path="/table" component={TableContainer} />
        <Route path="/stats" component={StatsContainer} />
        </div>
      </HashRouter>
    </Provider>
  </MuiThemeProvider>
);
window.addEventListener('load', function () {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
