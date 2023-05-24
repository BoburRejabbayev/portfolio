import React from 'react';
import Navbar from './nav/Navbar';
import './header.css'
import MainInfo from './headerMainInfo/mainInfo';

const Header = () => {
    return (
        <div className='header' id='header'>
            <Navbar />
            <header>
                <MainInfo />
            </header>
        </div>
    );
};

export default Header;