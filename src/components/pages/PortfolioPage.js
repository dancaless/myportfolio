import React from 'react';
import Portfolio from '../portfolio/portfolio';
import { Container } from 'reactstrap';
import Heading from '../heading/heading';
import '../portfolio/portfolio.scss';


export default class PortfolioPage extends React.Component {

    render() {
        return (
            <section className='portfolio content'>
                <Heading value='Мои работы' />
                <Container>
                    <Portfolio />
                </Container>

            </section>
        )
    }
}