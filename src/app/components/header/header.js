import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/userContext';
import Button from '../general-button/button';
import Icon from '../icon-svg/icon';
import Popup from '../popup/popup';
import ProfileForm from '../profile-form/profileForm';
import './header.scss';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
          {user ? (
            <>
              <p className="header__user--welcome">{user.message}</p>

              <Icon
                name="user-icon"
                size={{ width: '5rem', height: 'auto' }}
                color="var(--text-color-bg)"
              />

              <Button
                text="Perfil"
                color="var(--secondary-color)"
                mode="fill"
                textColor="var(--text-color-bg)"
                onClick={() => {
                  togglePopup();
                }}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      <Popup isOpen={isOpen} onClose={togglePopup}>
        <ProfileForm></ProfileForm>
      </Popup>
    </header>
  );
}

export default Header;
