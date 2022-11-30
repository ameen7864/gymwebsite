import React from 'react'
import './Testimonal.css'
import person1 from '../../assets/t-image1.png'

const Testimonal = () => {
  return (
    <div className='testimonal'>
        <div className='left-t'>
            <span>Testimonal </span>
            <span className='stroke-text'>whats they </span>
            <span>say about us</span>
        </div>
        <div className='right-t'>
            <div>
              
                <img src={person1} alt="" className='person1'/>
            </div>
        </div>
    </div>
  )
}

export default Testimonal