import React from 'react'
import './join.css'

const join = () => {
  return (
    <div className='join'>
        <div className='left-j'>
            <div><span className='stroke-text'>Ready to level up</span></div>
            <div><span>your body with us</span></div>
        </div>
        <div className='right-j'>
            <form className='email'>
                <input type="email" name="email" value="enter ur email "/>
                <button  className='btn'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default join