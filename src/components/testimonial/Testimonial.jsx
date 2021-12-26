import React from 'react'
import './testimonial.css'
import Rating from '../../assets/rating.svg'

const Testimonial = ({text,customer,post}) => {
    return (
        <div className='brandio__testimonial-container'>
            <div className='brandio__testimonial-container_description'>
                <img src={Rating} alt="" />
                <p>{text}</p>
                <h4>{customer}</h4>
                <h5>{post}</h5>
            </div>
        </div>
    )
}

export default Testimonial
