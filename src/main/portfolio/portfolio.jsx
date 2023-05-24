import React from 'react';
import './portfolio.css'
import pizza from '../../sources/pizza.png'
import credit from '../../sources/creditCalculator.png'
import vueCinema from '../../sources/vueCinema.png'

const Portfolio = () => {
    const alerting = () => {
        return alert('После скачивания нужно установить необходимые пакеты')
    }
    return (
        <div className='portfolio container' >
            <p>Portfolio</p>
            <div className="projects">
                <div className="vueCinema">
                    <img src={vueCinema} alt="" />
                    <h1 className="project_name">Vue Cinema</h1>
                    <a target='_blank' href="https://boburrejabbayev.github.io/Vue_Cinema/">Go to file</a>
                </div>
                <div className="creditCalculator">
                    <img src={credit} alt="" />
                    <h1 className="project_name">Credit Calculator</h1>
                    <a onClick={alerting} target='_blank' href="https://github.com/BoburRejabbayev/creditCalculator">Go to file</a>
                </div>
                <div className="pizzaProject">
                    <img src={pizza} alt="" />
                    <h1 className="project_name">Pizza Store</h1>
                    <a onClick={alerting} target='_blank' href="https://github.com/BoburRejabbayev/react-pizza.github.io">Go to file</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;