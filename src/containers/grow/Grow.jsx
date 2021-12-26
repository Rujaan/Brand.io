import React from 'react'
import { Customer } from '../../components'
import {Sales,Rating,Experience} from './imports'
import './grow.css'


const Grow = () => {
    return (
        <div className='brandio__grow section-margin'>
            <div className='brandio__grow-header'>
            <h1 >
                Grow faster with help your 
            </h1>
            <h1>
                customers
            </h1>
            </div>
            <div className='brandio__grow-container'>
                <Customer title='Ratings & Reviews' text='Collect reviews, Q&A and other content from your customers started.' imgUrl={Rating}/>
                <Customer title='Sales and Marketing' text='Use your user-generated content in sales and marketing. ' imgUrl={Sales}/>
                <Customer title='Customer Experience' text='In the end, its all about your customers. Build their trust and help.' imgUrl={Experience}/>
            </div>
        </div>
    )
}

export default Grow
