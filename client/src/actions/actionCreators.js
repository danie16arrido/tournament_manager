const addLeagueName = leagueName => {
  return {
        type: "SHOW_LEAGUE_NAME",
        league_name:leagueName
      }
}

export { addLeagueName }