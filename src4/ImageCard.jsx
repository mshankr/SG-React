import React, { useEffect, useRef, useState } from 'react'

const ImageCard = ({ image }) => {
  const { description, urls } = image;

  const [ spans, setSpans ] = useState(0)

  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.addEventListener('load', setImageSpans)
  }, []);

  const setImageSpans = () => {
    const height = imageRef.current.clientHeight
    console.log(height);
    const spans = Math.ceil(height / 8)
    setSpans(spans)

  }

  return (
    <div style={{ gridRowEnd: ` span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.small} />
    </div>
  )
}

export default ImageCard
