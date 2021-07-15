import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss'
import '../app/css/icons_brands.css'

export default class Error extends React.Component {
    render() {
        return (
            <section className='error'>
                <i class="fas fa-exclamation-triangle"></i>
                <div className='error-message'>Что-то пошло не так :( </div>
                <Link to='/'>На главную</Link>
            </section>
        )
    }
}