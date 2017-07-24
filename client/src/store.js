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

  return state;
}

export default createStore( reducer, { league_matches: [] }, applyMiddleware( thunk ));