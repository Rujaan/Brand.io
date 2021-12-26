import React from 'react'
import './working.css'
import {Step1,Step2,Step3} from './imports'
import {Steps} from '../../components'

const Working = () => {
    return (
        <div className='brandio__work section-margin'>
            <div className='brandio__work-heading'>
                <h1>How it works</h1>
                <div className='brandio__work-heading-paragraph'>
                    <p>It's about you and your family, having a comfortable payment,</p>
                    <p> exceptional service and a lender.</p>
                </div>
            </div>
            <div className='brandio__work-description'>
                <Steps imgUrl={Step1} title='Create Account' text='We know your home is more than just a place to live, thats why were committed to providing the best home loan' />
                <Steps imgUrl={Step2} title='Search for Services' text='It’s the fast, easy way to apply for your mortgage and access your application anytime, anywhere. With our mortgage access center' />
                <Steps imgUrl={Step3} title='Sit back and Enjoy' text='It’s about you and your family, having a comfortable payment, exceptional service and a lender.' />
            </div>
        </div>
    )
}

export default Working
