import React from 'react';
import LangContext from '../contexts/LangContext'

const Button = () => {

  const renderText = (value) =>
  (value === 'eng') ? 'Create' : 'Voorleggen'

  return (
  <button className='ui button primary' type='submit'>
    <LangContext.Consumer>
      {value => renderText(value)}
    </LangContext.Consumer>
  </button>
)
}
export default Button
