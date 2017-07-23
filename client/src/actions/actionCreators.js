import axios from 'axios'
const apiServer = "http://localhost:9100/api/v1"

const getApiLeagueName = leagueName => {
  return dispatch => {
    return axios.get( apiServer + "/leagues/3")
      .then( response => {
        dispatch(
          {
          type: "API_LEAGUE_NAME",
          league_name: response.data.name,
          league_id: response.data.id
          }
        )
      }
    )
  }
}


export { getApiLeagueName }