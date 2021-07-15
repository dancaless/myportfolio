import React from 'react';
import './portfolio.scss';
export default class Portfolio extends React.Component {

    render() {
        return (
            <div className='portfolio-works__wrapper'>
                <Work classForImg='food'
                    name='Food'
                    describe='Учебный проект. Осваивал: основы JavaScript, операторы, GIT, основы ООП, работа с DOM, async/await, классы' />
                <Work classForImg='got'
                    name='Game of Thrones'
                    describe='Учебный react проект. Осваивал: работу с промисами, Fetch, условный рендеринг, модульную систему' />
                <Work classForImg='restoservice'
                    name='Resto Service'
                    describe='Учебный react проект. Осваивал: json-sever, жизненный цикл компонентов, hoc.Context, тестирование JEST+Enzyme' />
            </div>
        )
    }
};

const Work = ({ classForImg, name, describe, url = 'https://yandex.ru/pogoda/?via=hl&lat=60.035255&lon=30.252818' }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer" className={`portfolio-work ${classForImg}`}>

            <div className='portfolio-work__name'>{name}</div>
            <div className='portfolio-work__describe'>
                {describe}
            </div>
        </a>
    )
}