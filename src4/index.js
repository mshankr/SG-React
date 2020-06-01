import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import Gallery from './Gallery'
import searchUnsplash from './searchUnsplash'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const [images] = searchUnsplash(searchTerm)
  console.log(images);

  const submitSearch = (searchTerm) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm)
  }

  return (
  <div className="ui container"
    style={{ marginTop: '10px' }}>
    <SearchBar onSubmit={submitSearch} />
    <Gallery images={images} />
  </div>
)}

ReactDOM.render(<App />, document.querySelector('#root'));
