import { createStore, applyMiddleware } from  'redux';
import thunk from 'redux-thunk'

const reducer = ( state, action ) => {
 if(action.type === "API_LEAGUE_NAME"){
    return {
      ...state,
      league_name: action.league_name,
      league_id: action.league_id
    }
  }
  return state;
}

export default createStore( reducer, { league_name: "" }, applyMiddleware( thunk ));