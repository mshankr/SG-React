import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const SongList = ({ songs, selectSong }) => {
  console.log(selectSong);
  const songList = songs.map(song => (
    <div className='item' key={song.title}>
    <div className='content'>
      <div className='ui animated left floated fade button' tabIndex="0"
        onClick={() => selectSong(song)}>
        <div className='visible content'>
        <i className='music icon' />
        </div>
        <div className='hidden content'>
        <i className='play icon' />
        </div>
      </div>
        <div className='header floated middle aligned'>{song.title}</div>
      </div>
    </div>
  ))

  return (
      <div className='ui middle aligned very relaxed selection divided list'>{songList}</div>
  )
}

function mapStateToProps({ songs }){
  return { songs }
}

// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, actions)(SongList)
