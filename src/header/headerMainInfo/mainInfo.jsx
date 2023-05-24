import React from 'react';
import iAm from '../../sources/I_am.png'
import './headerInfos.css'
import { TiCss3 } from 'react-icons/ti'
import { DiReact } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'

const MainInfo = () => {
    return (
        <div className='heder_infos container'>
            <div className="infos">
                <p className='hello'>Привет. Я</p>
                <p className='name'>Режаббаев Бобур</p>
                <p className='about'>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
                <p className='contact_me'><a href="#footer">Contact Me</a></p>
            </div>
            <div className="images">
                <img className='myImage' src={iAm} alt="" />
                <div className="eclipse">
                    <div className="inside_eclipse"></div>
                </div>
                <div className="prog_langs">
                    <div className="langs css ">
                        <TiCss3 color='#00C4F0' fontSize='36px' />
                    </div>
                    <div className="langs html">
                        <AiFillHtml5 color='#00C4F0' fontSize='36px' />
                    </div>
                    <div className="langs react">
                        <DiReact color='#00C4F0' fontSize='36px' />
                    </div>
                    <div className="langs js">
                        <IoLogoJavascript color='#00C4F0' fontSize='36px' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;