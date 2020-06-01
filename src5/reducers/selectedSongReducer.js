import { SONG_SELECTED } from '../actions/types'

export default (selectedSong = null, action) => {
  if (action.type === SONG_SELECTED) {
    console.log(action);
    return action.payload
  }
  return selectedSong
}
