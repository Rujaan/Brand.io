import React from 'react'
import './cta.css'
import decorator7 from '../../assets/decorator7.svg'
import semicircle from '../../assets/semicircle.svg'

const CTA = () => {
    return (
        <div className='brandio__cta '>
            <img src={decorator7} alt="decorator7" />
            <img src={semicircle} alt="semicircle" />
            <h1> Ready to get started? </h1>
            <p>Products on online services or over the Internet. Electronic commerce draws on technologies such as mobile  commerce application</p>
            <div className='brandio__cta-sign'>
                <input type="text" placeholder='Enter your email address' />
                <button type='button'>Sign Up</button>
            </div>
        </div>
    )
}

export default CTA
