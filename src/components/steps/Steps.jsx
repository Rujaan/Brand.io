import React from 'react'
import './steps.css'

const Steps = ({title,text,imgUrl}) => {
    return (
        <div className='brandio__steps-container'>
            <div className='brandio__steps'>
                <div className='brandio__steps-image'>
                    <img src={imgUrl} alt="" />
                </div>
                <div className='brandio__steps-description'>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Steps
