import React, { useState } from 'react'
import Logo from '../favicon.png';
import { NavLink } from 'react-router-dom';
import {RiMenu3Line} from 'react-icons/ri';
import {AiFillCloseCircle} from 'react-icons/ai';
function Navbar() {
  const [showNav,upShowNav] = useState(false);
  return (
  <>
    <nav className='navBar'>
    <div className="logo">
    <div className="lImg">
    <img src={Logo} alt="logo" />
        <h3>Fruit</h3>
    </div>
        {/* <div className="open"> */}
{showNav ? <AiFillCloseCircle className='opIcon' onClick={() => upShowNav(false)}/> : <RiMenu3Line className='opIcon' onClick={() => upShowNav(true)}/>}

    </div>
   
    <ul className={showNav ? 'li-list listActive' : 'li-list'}>
    <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/'>Home</NavLink></li>
    <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/product'>Product</NavLink></li>
    <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/about'>About Us</NavLink></li>
    <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/contact'>Contact Us</NavLink></li>
    </ul>

    </nav>
  </>
  )
}

export default Navbar
