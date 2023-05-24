import React from 'react';
import reactLogo from '../../sources/reactLogo.png'
import './navbar.css'
import { DiReact } from 'react-icons/di';

const Navbar = () => {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className='logo'>
                    {/* <img src={reactLogo}  alt="logo" /> */}
                    <DiReact color='#00C4F0' fontSize='48px' />
                    <p className='logoName' >Bobur</p>
                </div>
                <ul className='nav_list'>
                    <li onClick={scrollToTop}>Home</li>
                    <li><a href='#aboutMe'>About</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#footer'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;