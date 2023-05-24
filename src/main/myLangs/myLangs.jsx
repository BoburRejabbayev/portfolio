import React from 'react';
import './myLangs.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { TiCss3 } from 'react-icons/ti'
import { IoLogoJavascript } from 'react-icons/io'
import { DiReact } from 'react-icons/di'
import { TbBrandRedux } from 'react-icons/tb'

const MyLangs = () => {
    return (
        <div className='myLangs container' id='mylangs'>
            <div className="languages" >
                <AiFillHtml5 className="html myLanguages" />
                <p className="text">HTML</p>
            </div>
            <div className="languages" >
                <TiCss3 className="css myLanguages" />
                <p className="text">CSS</p>
            </div>
            <div className="languages" >
                <IoLogoJavascript className="js myLanguages" />
                <p className="text">JavaScript</p>
            </div>
            <div className="languages" >
                <DiReact className="react myLanguages" />
                <p className="text">React</p>
            </div>
            <div className="languages" >
                <TbBrandRedux className="readuxToolkit myLanguages" />
                <p className="text">Redux Toolkit</p>
            </div>
        </div>
    );
};

export default MyLangs;