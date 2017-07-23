const addLeagueName = leagueName => {
  return {
        type: "SHOW_LEAGUE_NAME",
        league_name:leagueName
      }
}

const getApiLeagueName = leagueName => {
  const apiName = "API_HERE"
  return {
        type: "API_LEAGUE_NAME",
        league_name: apiName
      }
}

export { addLeagueName, getApiLeagueName }