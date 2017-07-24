import React from 'react';
import ReactDOM from 'react-dom';
import UserPageContainer from './containers/UserPageContainer'
import store from './store'
import { Provider } from 'react-redux'

const leagueID = 9
import { getApiLeagueData, getApiLeagueName } from './actions/actionCreators'
store.dispatch(getApiLeagueName(leagueID))
store.dispatch(getApiLeagueData(leagueID))

window.addEventListener('load', function () {
  ReactDOM.render(
    <Provider store={ store }>
      <UserPageContainer id="user-page-container"/>
    </Provider>,
    document.getElementById('app')
  );
});
