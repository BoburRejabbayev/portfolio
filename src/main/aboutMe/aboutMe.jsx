import React from 'react';
import { TbBrandRedux } from 'react-icons/tb'
import './aboutMe.css'

const AboutMe = () => {
    return (
        <>
            <div className='aboutMeInfo container' >
                <div className="circles bigCirlce">
                    <div className="inside_eclipse"></div>
                </div>
                <div className="circles middleCircle">
                    <div className="inside_eclipse"></div>
                </div>
                <div className="circles smallCircle">
                    <div className="inside_eclipse"></div>
                </div>
                <div className="myInfo">
                    <h1>Обо мне</h1>
                    <p className="info_text">
                        Я увлеченный и внимательный к деталям программист, ищу должность начального уровня в компании, чтобы использовать свои навыки кодирования, устранения сложных проблем и оказания помощи в своевременном завершении проектов.
                        <br /> <br /> Навыки:
                        <br /> - Верстка адаптивных сайтов разной сложности с использованием HTML5, CSS3, и JavaScript
                        <br />- Разрабатывал клиентскую часть новых продуктов ( React.js)
                        <br /> - Сотрудничал с дизайнерами и разработчиками
                        <br /> - Технологии: HTML5, CSS3, Bootstrap, JavaScript, Git, ReactJS, Redux Toolkit, Axios, React-router-dom, React-loading-skeleton
                        <br /> - Владение языками: узбекский – родной язык, русский
                        <br />– свободное владение английский – базовое знание.

                        <br /><br /> Качества: <br />
                        Работоспособность, целеустремленность, стрессоустойчивость, умение работать в команде, дисциплинированность, аккуратность.


                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutMe;