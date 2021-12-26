import React from 'react'
import './footer.css'
import {ig,linkedin,facebook,twitter} from './imports'

const Footer = () => {
    return (
        <div className='brandio__footer section-margin'>
            <div className='brandio__footer-container'>
                <div className='brandio__footer-description'>
                    <h1>brand.io</h1>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
                <div className='brandio__footer-notes'>
                    <div>
                        <h1>About</h1>
                        <p>Home</p>
                        <p>Features</p>
                        <p>FAQs</p>
                        <p>Reviews</p>
                        <p>Stories</p>
                    </div>
                    <div>
                        <h1>Privacy</h1>
                        <p>Privacy</p>
                        <p>Policy</p>
                        <p>Payment</p>
                        <p>Terms</p>
                    </div>
                    <div>
                        <h1>Contact Us</h1>
                        <p>
                        +01 234 567 8910 
                        </p>
                        <p>arshakir@gmail.com</p>
                        <div className='brandio__footer-notes_logo-container'>
                                <div><img src={ig} alt="ig" /></div>
                                <div><img src={linkedin} alt="linkedin" /></div>
                                <div><img src={facebook} alt="facebook" /></div>
                                <div><img src={twitter} alt="twitter" /></div>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className='brandio__footer-divider'/>
            <div className='brandio__footer-contact'>
                <p>© Copyright 2021 <strong>brand.io</strong> All rights reserved.</p>
                <p>Contact Us</p>
                <p>Terms</p>
            </div>
        </div>
    )
}

export default Footer
