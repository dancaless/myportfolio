import React from 'react';
import { Container } from 'reactstrap';
import './footer.scss';
import '../app/css/icons_brands.css'

export default class Footer extends React.Component {
    render() {
        return (

            <section className='footer'>
                <Container>
                    <a href="mailto:dancaless@gmail.com"><i className="far fa-envelope"></i></a>
                    <a href="https://t.me/dancaless" target='_blank' rel="noreferrer"><i className="fab fa-telegram"></i></a>
                    <a href="https://www.linkedin.com/in/alex-sapozhnikov/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </Container>
            </section >



        )
    }
}