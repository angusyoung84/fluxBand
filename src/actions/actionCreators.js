

//add band
export function addBand(band, album){
  return {
    type: 'ADD_BAND',
    band: band,
    album: album
  }
}

export function removeBand(i){
  return {
    type: 'REMOVE_BAND',
    i: i
  }
}