import React from 'react'
import './projects.css'

const Projects = ({title,text}) => {
    return (
        <div className='brandio__project-container'>
            <h3> {title} </h3>
            <p> {text} </p>
        </div>
    )
}

export default Projects
