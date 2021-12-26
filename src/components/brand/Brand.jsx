import React from 'react'
import './brand.css'
import {Planday,Umbraco,Pearfisher,Brightpearl,Planday2} from './imports'

const Brand = () => {
    return (
        <div className='brandio_brands section-margin'>
            <div> <img src={Planday} alt="Planday" /> </div>
            <div> <img src={Umbraco} alt="Umbraco" /> </div>
            <div> <img src={Pearfisher} alt="Pearfisher" /> </div>
            <div> <img src={Brightpearl} alt="Brightpearl" /> </div>
            <div> <img src={Planday2} alt="Planday2" /> </div>
        </div>
    )
}

export default Brand
