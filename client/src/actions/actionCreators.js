import axios from 'axios'
const apiServer = "http://localhost:9100/api/v1"
const leagueID = 9
const getApiLeagueName = leagueID => {
  return dispatch => {
    return axios.get( apiServer + "/leagues/" + leagueID)
      .then( response => {
        dispatch(
          {
          type: "API_LEAGUE_NAME",
          league_name: response.data.name
          }
        )
      }
    )
  }
}

const getApiLeagueData = leagueID => {
  return dispatch => {
    return axios.get( apiServer + "/leagues/" + leagueID)
      .then( response => {
        dispatch(
          {
          type: "API_LEAGUE_MATCHES",
          league_matches: response.data.matches 
          }
        )
      }
    )
  }
}


export { getApiLeagueData, getApiLeagueName }