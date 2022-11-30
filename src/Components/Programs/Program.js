import React from 'react'
import './Program.css';
import {programsData} from '../../data/programsData'

const Program = () => {
  return (
    <div className='programs' id='programs'>
        {/* header */}
        <div className='programs-header'>
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape You</span>
        </div>
        {/* program categories */}
        <div className='program-categories'>
            {programsData.map((programs)=>(
              <div className='category'>
                  {programs.image}
                  <span>{programs.heading}</span>
                  <span>{programs.details}</span>
                  <div className="join-now">Join Now</div>
              </div>
            ))}

                
            </div>
        </div>
        
    
  )
}

export default Program