import React from 'react'
import './Plandetails.css'
import { plansData } from '../../data/plansData'

const Plandetails = () => {
        return (
                <div className='plans-container'>
                        <div className='plan-header' >
                                <span className='stroke-text'>Ready to start</span>
                                <span> your journey </span>
                                <span className='stroke-text'>now with us</span>
                        </div>
                        {/* plancard */}
                        <div className='plans'>
                                {plansData.map((plan, i) => (
                                        <div className="plan" key={i}>{plan.icon}
                                                <span>{plan.name}</span>
                                                <span>${plan.price}</span>
                                                <div className="features">
                                                        {plan.features.map((feature, i) => (
                                                                <div className="feature">
                                                                        <span>{feature}</span>
                                                                </div>
                                                        ))}
                                                </div>
                                                <div>
                                                        <span className='benefits'>see more benefits</span>
                                                </div>
                                                <button className='btn' style={{marginLeft:'4rem'}}>Join Now</button>
                                        </div>

                                ))}

                        </div>




                </div>
        )
}

export default Plandetails