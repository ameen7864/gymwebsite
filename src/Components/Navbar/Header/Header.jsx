import React from 'react'
import './Header.css'
import running from '../../../assets/runing.png'
const Header = () => {
  return (
    <div className='header'>
        <img src={running} alt="logo" className='logo'/>
        <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why Us</li>
          <li>Plans</li>
          <li>Testimonals</li>
        </ul>
    </div>
  )
}

export default Header