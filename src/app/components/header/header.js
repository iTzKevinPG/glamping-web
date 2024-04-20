import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../general-button/button';
import Icon from '../icon-svg/icon';
import './header.scss';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getLinkClassName = (path) => {
    return `header__menu--item ${location.pathname === path ? 'active' : ''}`;
  };

  const handleClick = (buttonName) => {
    navigate(`/${buttonName}`);
  };

  return (
    <header>
      <div className="header">
        <a href="/" className="header__logo-container">
          <Icon
            name="logotipo"
            size={{ width: '10rem', height: '5rem' }}
            color="var(--text-color-bg)"
          />
        </a>
        <div className="header__menu">
          <Link className={getLinkClassName('/')} to="/">
            <span>Inicio</span>
          </Link>
          <Link className={getLinkClassName('/reserve')} to="/reserve">
            <span>Reservas</span>
          </Link>
          <Link className={getLinkClassName('/faq')} to="/faq">
            <span>Preguntas Frecuentes</span>
            <Icon
              name="question"
              size={{ width: '1.5rem', height: '1.5rem' }}
              color="var(--primary-color-light)"
            />
          </Link>
        </div>
        <div className="header__user">
          <Button
            text="Iniciar Sesión"
            color="var(--text-color-bg)"
            mode="outline"
            textColor="var(--text-color-bg)"
            onClick={() => {
              handleClick('login');
            }}
          />

          <Button
            text="Registrarse"
            color="var(--secondary-color)"
            mode="fill"
            textColor="var(--text-color-bg)"
            onClick={() => {
              handleClick('register');
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
