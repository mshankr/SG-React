import { combineReducers } from 'redux'
import songsReducer from './songsReducer'
import selectedSongReducer from './selectedSongReducer'

export default combineReducers ({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
