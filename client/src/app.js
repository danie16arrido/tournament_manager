import React from 'react';
import ReactDOM from 'react-dom';
import UserPageContainer from './containers/UserPageContainer'

window.addEventListener('load', function () {
  ReactDOM.render(
    <UserPageContainer id="user-page-container"/>,
    document.getElementById('app')
  );
});
