import React from 'react';
import './contact.scss'
import '../app/css/icons_brands.css';
export default class Contact extends React.Component {

    render() {
        return (
            <section className='contact'>
                <ul>
                    <ContactItem
                        img='far fa-envelope' S
                        value='dancaless@gmail.com'
                        link='mailto:dancaless@gmail.com'
                        clickable
                    />
                    <ContactItem
                        img='fas fa-mobile-alt'
                        value='+79214355184'
                        link='tel:+79214355184'
                        clickable
                    />
                    <ContactItem
                        img='fas fa-map-marker-alt'
                        value='Санкт-Петербург'
                    />
                </ul>

            </section>
        )
    }
};

const ContactItem = ({ img, value, link = '', clickable = false }) => {
    if (clickable) {
        return (
            <li className='contact_item'>
                <a href={link} >
                    <i className={img}></i>
                    <h4>{value}</h4>
                </a>
            </li>

        )
    }
    else {
        return (
            <div className='contact_item'>
                <i className={img}></i>
                <h4>{value}</h4>
            </div>
        )
    }

}

