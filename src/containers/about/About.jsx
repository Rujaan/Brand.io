import React from 'react'
import './about.css'
import { Projects } from '../../components'

const ProjectsDone = [
    {
        title:'1000+',
        text:'Completed Projects'
    },
    {
        title:'250+',
        text:'Ongoing Projects'
    },
    {
        title:'500+',
        text:'Happy Customers'
    },
    {
        title:'25',
        text:'Offices through out GLOBE'
    }
]

const About = () => {
    return (
        <div className='brandio__about-container section-margin' >
            <div className='brandio__about-container_description'>
                <h1> About US</h1>
                <p>And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</p>
                <div className='brandio__about-container_description-sign'>
                    <button type='button'> Learn More </button>
                    <button type='button'> Watch Video </button>
                </div>
            </div>
            <div className='brandio__about-container_description-vl'/>
            <div className='brandio__about-container_projects'>
                {ProjectsDone.map((item,idex)=>(
                    <Projects title={item.title} text={item.text} key={item.title + idex}/>
                ))}
            </div>
        </div>
    )
}

export default About
