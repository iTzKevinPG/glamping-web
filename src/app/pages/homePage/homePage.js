import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/general-button/button';
import { useUser } from '../../contexts/userContext';
import './homePage.scss';

function HomePage() {
  const { user } = useUser();
  const navigate = useNavigate();

  const openMap = () => {
    console.log('hola');
    window.open(`https://maps.app.goo.gl/NqjoAVx8zEZiZ4Qd6`, '_blank');
  };

  return (
    <>
      <div className="home">
        <div className="backGroundLines two"></div>
        <div className="home__content">
          <div className="home__text">
            <h1 className="home__title">Glamping Bosque Escondido</h1>
            <p className="home__description">
              Vive una experiencia única en contacto con la naturaleza sin
              renunciar al lujo y confort. Perfecto para una escapada romántica
              o una aventura familiar. ¡Explora, relájate y renueva tu espíritu
              en Glamping Bosque Escondido!
            </p>
            <h2 className="home__subtitle">Lo natural es mejor</h2>
            <div className="home__button">
              <Button
                text="Reservar"
                color="var(--primary-color)"
                mode="fill"
                textColor="var(--text-color-bg)"
                onClick={() => {
                  if (user) {
                    navigate('/reserve');
                  } else {
                    navigate('/login');
                  }
                }}
              />
            </div>
          </div>
          <div className="home__image">
            <img
              src="../assets/images/glampin2.svg"
              alt="Glamping Bosque Escondido"
            />
          </div>
          <div className="home__background">
            <img
              src="../assets/images/fondoglampinsvg.svg"
              alt="Bosque Escondido"
            />
          </div>
        </div>
        <div className="home__contact">
          <div className="home__contact-item" onClick={() => openMap()}>
            <img
              src="../assets/icons/Location-Icon.svg"
              alt="Location"
              className="home__contact-icon"
            />
            <div className="home__contact-info">
              <h3>Visita el glamping</h3>
              <p>Vda. El Peñol, Peñol, Antioquias</p>
            </div>
          </div>
          <div className="home__line-separator"></div>
          <div className="home__contact-item">
            <img
              src="../assets/icons/phone-call.svg"
              alt="Phone"
              className="home__contact-icon"
            />
            <div className="home__contact-info">
              <h3>Llámanos</h3>
              <p>(604) 111-1010</p>
            </div>
          </div>
          <div className="home__line-separator"></div>
          <div className="home__contact-item">
            <img
              src="../assets/icons/mail.svg"
              alt="Message"
              className="home__contact-icon"
            />
            <div className="home__contact-info">
              <h3>Envíanos un mensaje</h3>
              <p>glamping@antioquiaglam.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
