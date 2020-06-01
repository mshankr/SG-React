import { useEffect, useState } from 'react'
import unsplash from './apis/unsplash'

export default (searchTerm) => {
  const [images, setImages] = useState([]);
    useEffect(() => {
      (async searchTerm => {
        const response = await unsplash.get(
          "/search/photos", {
            params: { query: searchTerm }
          })
          setImages(response.data.results)
      })(searchTerm)
    }, [searchTerm])

    return [images]
  }
