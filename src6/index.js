import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleString())
  setInterval(() => {
    setTime(new Date().toLocaleString())
  }, 1000)

  return (
    <div className='time ui huge grey header'>
      The time is: {time}
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
