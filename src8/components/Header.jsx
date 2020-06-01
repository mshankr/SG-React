import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import logo from '../assets/hi5.png'

const Header = () => {
  return (
    <div className='ui top secondary inverted violet menu'>
      <Link to='/' className='item'>
        <img className='ui mini spaced image' src={logo} />
        <div className='content'>
          <div className='header'><h3>Streamy</h3></div>
        </div>
      </Link>
      <div className='right menu'>
        <Link to='/' className='ui item'>Streams</Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header
