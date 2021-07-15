import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import '../skills/css/icons_brands.css'

export default class Footer extends React.Component {
    render() {
        return (
            <section className='footer'>
                <a href="mailto:someone@yoursite.com"><i class="far fa-envelope"></i></a>

                <a href="https://www.linkedin.com/in/alex-sapozhnikov/" target='_blank' without rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>


            </section >
        )
    }
}