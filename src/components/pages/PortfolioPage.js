import React from 'react';
import Portfolio from '../portfolio/portfolio';
import { Container } from 'reactstrap';
import '../portfolio/portfolio.scss';


export default class Contact extends React.Component {

    render() {
        return (
            <section className='portfolio  content'>
                <div className='portfolio__title'>
                    <h1>Мои работы</h1>
                </div>
                <Container>
                    <Portfolio />
                </Container>

            </section>
        )
    }
}