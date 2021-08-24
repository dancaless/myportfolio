import React from 'react';
import { Container } from 'reactstrap';
import Contact from '../contact/contact';
import Heading from '../heading/heading';
import '../contact/contact.scss';

export default class ContactPage extends React.Component {

    render() {
        return (
            <section className='contact content'>
                <Heading value='Контакты' />
                <Container>
                    <Contact />
                </Container>

            </section>
        )
    }
}