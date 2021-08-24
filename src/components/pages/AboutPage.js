import React from 'react';
import AboutMain from '../aboutMain/aboutMain';
import { Container } from 'reactstrap';
import Skills from '../skills/skils';


export default class AboutPage extends React.Component {

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