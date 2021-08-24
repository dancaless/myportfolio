import React from "react";
import '../app/css/icons_brands.css';
import './menu.scss';
import { Link } from 'react-router-dom';



export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    openMenu = () => {
        this.setState({ show: true });
        document.body.style.overflow = "hidden";
    }

    closeMenu = () => {
        this.setState({ show: false });
        document.body.style.overflow = "visible";
    }

    // toggleShow = () => {
    //     const show = this.state.show;
    //     this.setState({ show: !this.state.show });
    // !show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    // }
    escFunction = (event) => {
        if (event.keyCode === 27) {
            this.setState({ show: false })
        }
    }

    componentDidMount() {
        this.setState({ show: false });
        document.addEventListener("keydown", this.escFunction, false);
    }

    render() {

        const menuPlace = <div className='menu__place' onKeyDown={this.escFunction}>
            <span className='menu__i'><i className="fas fa-times"
                onClick={this.closeMenu}></i>
            </span>
            <ul>
                <li> <Link to="/about" onClick={this.closeMenu}>Обо мне</Link></li>
                <li> <Link to="/portfolio" onClick={this.closeMenu}>Портфолио</Link></li>
                <li> <Link to="/contact" onClick={this.closeMenu}>Контакты</Link></li>
            </ul>
        </div>

        const navMenu = this.state.show ? menuPlace : null

        return (
            <div className='menu' >
                <span className='menu__i'><i className="fas fa-bars"
                    onClick={this.openMenu}></i>
                </span>
                {navMenu}
            </div>
        )
    }
}