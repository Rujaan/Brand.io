import React from 'react'
import './customer.css'

const Customer = ({imgUrl,title,text}) => {
    return (
        <div className='brandio__customer'>
            <div className='brandio__customer-header'>
                <img src={imgUrl} alt="Brandio__icon" />
                <h1>
                    {title}
                </h1>
            </div>
            <div className='brandio__customer-text'>
                <p>
                    {text}
                </p>
            </div>    
        </div>
    )
}

export default Customer
