import { createStore, applyMiddleware } from  'redux';
import thunk from 'redux-thunk'

const reducer = ( state, action ) => {
 if(action.type === "API_LEAGUE_NAME"){
    return {
      ...state,
      league_name: action.league_name
    }
  }else if(action.type === "API_LEAGUE_MATCHES"){
    return {
      ...state,
      league_matches: action.league_matches
    }
  }
  else if(action.type === "API_TEAM_DATA"){
    return {
      ...state,
      teamData: action.team_data
    }
  }

  else if(action.type === "API_LOCATION_DATA"){
    return {
      ...state,
      locationData: action.location_data
    }
  }

  return state;
}

export default createStore( reducer, { league_matches: [], teamData:{}, locationData: {} }, applyMiddleware( thunk ));