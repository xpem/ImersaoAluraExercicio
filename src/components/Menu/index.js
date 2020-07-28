import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/index';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Alura Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo Vídeo
                </Button>
        </nav>
    );
}

export default Menu;