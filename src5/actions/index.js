import { SONG_SELECTED } from './types'

export const selectSong = (song) => {
  // Return an action ---- to ----> Reducers
  return {
    type: SONG_SELECTED,
    payload: song
  };
}
