import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'reactstrap';
import './footer.scss';
import '../app/css/icons_brands.css'

export default class Footer extends React.Component {
    render() {
        return (

            <section className='footer'>
                <Container>
                    <a href="mailto:dancaless@gmail.com"><i class="far fa-envelope"></i></a>
                    <a href="https://t.me/dancaless" target='_blank' without rel="noreferrer"><i class="fab fa-telegram"></i></a>
                    <a href="https://www.linkedin.com/in/alex-sapozhnikov/" target='_blank' without rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                </Container>
            </section >



        )
    }
}