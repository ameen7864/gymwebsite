import React from 'react'
import './Navbar.css'
import Header from './Header/Header'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
const Navbar = () => {
  return (
    <div className='hero'> 
    <div className='left-h'>
        <Header/>
        {/* best ad */}
    <div className='the-best-ad'>
        <div></div>
        <span>The best fitness club in the town</span>
    </div>
        
        {/* hero heading */}
        <div className='hero-text'>
           <div>
                <span className='stroke-text'>shape</span>
                <span> your</span>
           </div>
           <div>
                <span>Ideal Body</span>
           </div>
            <div className='text'>
                In here we will help you to shape and build your body
            </div>
        </div>
        {/* figures */}
        <div className='figures'>
            <div className='data'>
                <span>+140</span>
                <span>expert coaches</span>
            </div>
            <div className='data'>
                <span>+978</span>
                <span>Members joined</span>
            </div>
            <div className='data'>
                <span>+50</span>
                <span>Fitness Programs</span>
            </div>
        </div>
        {/* buttons */}
        <div className='button'>
            <button  className='btn' type="">Get Started</button>
            <button className='btn2' type="">Learn More</button>   
        </div>

     </div>
    <div className='right-h'>
        <button type="" className='btn'>Join Now</button>
        

        <div className='heart-rate'>
            <img src={Heart} alt="heart"/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </div>
        {/* heroimages */}
        <div className='image'>
        <img src={hero_img} alt="heroimg" className='hero-img'/>
        <img src={hero_img_back} alt="heroimg" className='hero-img-back'/>
        </div>
    </div>
        
    
    </div>
  )
}

export default Navbar