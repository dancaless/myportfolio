import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'
export default class About extends React.Component {

    render() {
        return (
            <header className='header'>
                <Link to="/">
                    <div className='header-logo'>
                        <div className='header-name'><b>Alex </b>Sapozhnikov</div>
                    </div>
                </Link>


                <nav className="header-nav">
                    <ul>
                        <li> <Link to="/about">Обо мне</Link></li>
                        <li> <Link to="/portfolio">Портфолио</Link></li>
                        <li> <Link to="/contact">Контакты</Link></li>
                    </ul>
                </nav>
            </header >
        )
    }
};
