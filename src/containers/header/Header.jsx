import React from 'react'
import './header.css'
import { chart,growth,experience,emojibar,play,hero } from './imports'

const Header = () => {
    return (
        <div className='brandio__header section-margin'>
            <div className='brandio__header-story'>
                <h1>
                    Tell a <span className='accent-color'>better</span> <span className='accent-color'>brand</span> story
                </h1>
                <p>
                    Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.
                </p>

                <div className='brandio__header-story_sign'>
                    <button type='button' className='light'>Explore More</button>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className='brandio__header-image'>
                <img src={hero} alt="Hero" />
                <img src={play} alt="play" />
                <img src={experience} alt="experience" />
                <img src={chart} alt="chart" />
                <img src={growth} alt="growth" />
                <img src={emojibar} alt="emojibar" />
            </div>
        </div>
    )
}

export default Header
