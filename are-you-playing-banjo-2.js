function areYouPlayingBanjo(name) {
    return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
  }

  console.log(areYouPlayingBanjo('richard'))
  console.log(areYouPlayingBanjo('annie'))