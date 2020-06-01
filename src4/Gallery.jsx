import React from 'react'
import ImageCard from './ImageCard'
import './Gallery.css'

const Gallery = ({ images }) => {

  const imageList = images.map(image =>
    <ImageCard key={image.id} image={image} />)

  return (
  <div className="gallery">{imageList}</div>
)}

export default Gallery
