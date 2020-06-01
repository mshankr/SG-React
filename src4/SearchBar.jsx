import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {

  const [ searchTerm, setsearchTerm] = useState('')
  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(searchTerm);
  }

  return (
  <div className='ui segment'>
    <form className='ui form' onSubmit={onFormSubmit}>
      <div className="ui fluid icon input field">
        <input type="text" placeholder="Image Search..."
          value={searchTerm}
          onChange={e => setsearchTerm(e.target.value)}/>
        <i className="search icon"></i>
      </div>
    </form>
    </div>
  )
}

export default SearchBar
