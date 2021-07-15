import React from 'react';
import './skills.scss';
import '../app/css/icons_brands.css';

const Skill = ({ className, name }) => {
    return (
        <div className='about-skills__item'>
            <i class={className}></i>
            <h4 className='about-skills__itemTittle'>{name}</h4>
        </div>
    )
}
export default class Skills extends React.Component {
    render() {
        return (
            <div className='about-skills'>
                <div className='about-skills__title'>
                    <h2>Используемые технологии</h2>
                </div>
                <div className='about-skills__items'>
                    <Skill className='fab fa-react' name='React' />
                    <Skill className='fab fa-js' name='JavaScript' />
                    <Skill className='fab fa-sass' name='Sass' />
                    <Skill className='fab fa-node-js' name='Node.js' />
                    <Skill className='fab fa-css3-alt' name='CSS' />
                    <Skill className='fab fa-figma' name='Figma' />
                    <Skill className='fab fa-html5' name='HTML5' />
                    <Skill className='fas fa-database' name='SQL' />
                </div>
            </div>
        )
    }
}

