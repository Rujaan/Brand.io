import React from 'react'
import './App.css'
import {Header, Testimonials, Working,Footer, About,Grow} from './containers'
import {Brand, Navbar, CTA} from './components'


const App = () => {
    return (
        <div className='App'>
            <Navbar/>
            <Header/>
            <Brand/>
            <Grow/>
            <Working/>
            <About/>
            <Testimonials/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default App
