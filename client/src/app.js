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

window.addEventListener('load', function () {
  ReactDOM.render(
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
    </Provider>,
    document.getElementById('app')
  );
});
