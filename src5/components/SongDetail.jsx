import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <h2 className='ui header'>Select a song</h2>
    )
  }

  return (
    <div>
      <h2 className='ui header'>{song.title}</h2>
      <p>Duration: {song.duration}</p>
    </div>
  )
}

function mapStateToProps({ selectedSong }) {
  return { song: selectedSong }
}

export default connect(mapStateToProps, null)(SongDetail)
