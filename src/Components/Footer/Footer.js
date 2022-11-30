import React from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
        <FiFacebook className='fb'/>
        <FiInstagram className='fb'/>
        <FiGithub className='fb'/>
        </div>
    </div>
  )
}

export default Footer