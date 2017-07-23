import { createStore, applyMiddleware } from  'redux';

const reducer = ( state, action ) => {
  if(action.type === "SHOW_LEAGUE_NAME" ){ 
    return {
      ...state, 
      league_name: action.league_name
    }    
  }else if(action.type === "API_LEAGUE_NAME"){
    return {
      ...state,
      league_name: action.league_name
    }
  }
  return state;
}

export default createStore( reducer, { league_name: "" }, applyMiddleware());