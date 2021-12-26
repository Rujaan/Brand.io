import React, { useState } from 'react'
import './navbar.css'
import decorator1 from '../../assets/decorator1.svg'
import decorator2 from '../../assets/decorator2.svg'
import {FiAlignJustify} from 'react-icons/fi';
import {FiX} from 'react-icons/fi'

const Menu = () =>(
    <>
    <p> <a href="#Home">Home</a></p>
    <p> <a href="#About">About</a></p>
    <p> <a href="#Testimonials">Testimonials</a></p>
    <p> <a href="#Contact">Contact</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false);

    return (
        <div className='brandio__navbar'>
            <div className='brandio_navbar_decorator'>
                <img src={decorator1} alt="" />
                <img src={decorator2} alt="" />
            </div>
            <div className='brandio__navbar-links'>
                <div className='brandio__navbar-links_logo'>
                    brand.io
                </div>
                <div className='brandio__navbar-links_container'>
                    <Menu/>
                </div>
                <div className='brandio__navbar-links_sign'>
                    <p>Login</p>
                    <button type='button' className='light'>Sign Up</button>
                </div>
                <div className='brandio__navbar-menu'>
                {toggleMenu
                    ?
                    <FiX color='#313131' size={27} onClick={() => setToggleMenu(false)}/>
                    :
                    <FiAlignJustify color='#313131' size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu &&(
                    <div className='brandio__navbar-menu_container slide-bottom'>
                        <div className='brandio__navbar-menu_container_links'>
                            <Menu/>
                        </div>
                        <div className='brandio__navbar-menu_container_links'>
                            <p>Login</p>
                            <button type='button' className='light'>Sign Up</button>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
