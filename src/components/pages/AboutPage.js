import React from 'react';
import AboutMain from '../aboutMain/aboutMain';
import { Col, Row, Container } from 'reactstrap';
import Skills from '../skills/skils';


export default class Contact extends React.Component {

    render() {
        return (
            <Container>
                <section className='about content'>
                    <AboutMain />
                    <Skills />
                </section>
            </Container>

        )
    }
}