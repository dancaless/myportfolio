import React from 'react';
import { Link } from 'react-router-dom';

import './aboutMain.scss';
export default class AboutMain extends React.Component {

    render() {
        return (

            <div className='about-main'>
                <div className='about-main__photo'>
                </div>
                <div className='about-main__info'>
                    <div className='about-main__subtitle'>
                        Frontend-developer
                    </div>
                    <h1 className='about-main__title'>
                        Александр Сапожников
                    </h1>
                    <div className='about-main__describe'>
                        Я начинающий веб-разработчик из Санкт-Петербурга.
                        На данном этапе эта страница создана для потенциальных работодателей.
                        Я начал свою карьеру в IT с аналитика, научился работать с базами данных. Сейчас мне очень интересна сфера Веб-разработки и программирование

                    </div>
                    <div className='about-main__buttons'>
                        <Link to="./Sapozhnikov_Aleksandr_Viktorovich.pdf" target="_blank" download>
                            <button className='about-main__button button recomended'>Скачать Резюме</button>
                        </Link>
                        <Link to='/contact'>
                            <button className='about-main__button button'>Контакты</button>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
};
