import React from 'react';
import './contact.scss'
export default class Contact extends React.Component {

    render() {
        return (
            <section className='contact'>
                <ContactItem />
            </section>
        )
    }
};

const ContactItem = ({ img, value, link }) => {
    return (
        <a href={link}><i class={img}></i>
            <h4>{value}</h4>
        </a>
    )
}