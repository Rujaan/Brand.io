import React from 'react'
import './testimonials.css'
import { Testimonial } from '../../components'
import decorator6 from '../../assets/decorator6.svg'

const TestimonialData =[
    {
        text:'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
        customer:'Sabo Masties',
        post:'Founder @ Rolex'
    },
    {
        text:'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
        customer:'Sam',
        post:'Founder @ Migeko'
    },
    {
        text:'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
        customer:'Mansur',
        post:'Founder @ Google'
    },
]

const Testimonials = () => {
    return (
        <div className='brandio__testimonials'>
            <div className='brandio_testimonials-container section-margin'>
                <img src={decorator6} alt="decorator6" id='brandio__testimonials-decorator6' />
                <div className='brandio__testimonials-header'>
                    <h1>What our clients say </h1>
                    <p>Community development is often linked with community work or community planning, and may involve stakeholders, foundations,</p>
                </div>
                <div className='brandio__testimonials-description'>
                    <div className='brandio__testimonial-description_container'>
                        <div className='brandio__testimonial-description_container-bg'/>
                        {TestimonialData.map((item,index)=>(
                            <Testimonial text={item.text} customer={item.customer} post={item.post} key={item.customer + index} />
                        ))}
                        <div className='brandio__testimonial-description_container-sign'>
                            <p></p>
                            <button type='button'></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
