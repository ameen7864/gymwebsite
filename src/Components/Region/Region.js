import React from 'react'
import './Region.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
const Region = () => {
  return (
    <div className='region'>
      <div className='left-side'>
        <img src={image1} alt="body" />
        <img src={image2} alt="bodybuilder" />
        <img src={image3} alt="weight" />
        <img src={image4} alt="lifter" />
      </div>
      <div className='right-side'>
        <span className='reasons'>Some Reasons</span>
        <div className='choose'>
          <span className='stroke-text'>why</span>
          <span > choose us?</span>
        </div>
        <div className='details'>
          <div>
            <img src={tick} alt="tick" />
            <span>over 140+ expert choice</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span> train smarter</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>free Program</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span> partners</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Region