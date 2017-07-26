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

const getApiTeamData = teamID => {
  return dispatch => {
    return axios.get( apiServer + "/teams/" + teamID)
      .then( response => {
        dispatch(
          {
          type: "API_TEAM_DATA",
          team_data: response.data
          }
        )
      }
    )
  }
}

const getApiLocationData = locationID => {
  return dispatch => {
    return axios.get( apiServer + "/leagues/9/locations/" + locationID)
      .then( response => {
        dispatch(
          {
          type: "API_LOCATION_DATA",
          location_data: response.data
          }
        )
      }
    )
  }
}

export { getApiLeagueData, getApiLeagueName, getApiTeamData, getApiLocationData }