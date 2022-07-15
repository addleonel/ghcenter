import * as React from "react";
import "../assets/styles/Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import buttonURL from "../utils";

const Footer = () => {
  const contactURL = buttonURL;
  return (
    <React.Fragment>
      <div className="home-footer">
        <ul className="home-footer__ul">
            <li className="home-footer__li"><Link  to="/about/" className="home-footer__link">Sobre Nosotros</Link></li>
            <li className="home-footer__li"><Link  to="/contact/" className="home-footer__link" onClick={() => window.location.href = contactURL}>Contacto</Link></li>
            <li className="home-footer__li"><Link  to="/products/" className="home-footer__link">Productos</Link></li>
        </ul>
        <ul className="home-footer__ul">
            <p className="home-footer__p"> Nuestras categorías:</p>
            {/* <li className="home-footer__li"><HashLink  to="/products/#llantas" className="home-footer__link">Llantas</HashLink></li> */}
            <li className="home-footer__li"><HashLink  to="/products/#sistema-arrastre" className="home-footer__link">Sistema de arrastre</HashLink></li>
            <li className="home-footer__li"><HashLink  to="/products/#sistema-electrico" className="home-footer__link">Sistema electrico</HashLink></li>
            {/* <li className="home-footer__li"><HashLink  to="/products/#sistema-motor" className="home-footer__link">sistema de motor</HashLink></li> */}
            {/* <li className="home-footer__li"><HashLink  to="/products/#luces" className="home-footer__link">Luces</HashLink></li> */}
            <li className="home-footer__li"><HashLink  to="/products/#accesorios-motor" className="home-footer__link">Accesorios para motor</HashLink></li>
            <li className="home-footer__li"><HashLink  to="/products/#accesorios-piloto" className="home-footer__link">Accesorios para piloto</HashLink></li>
            <li className="home-footer__li"><HashLink  to="/products/#sistemas-frenos" className="home-footer__link">Sistema de frenos</HashLink></li>
        </ul>
        <div>
          <p className="home-footer__p">Siguenos en redes sociales</p>
          <div className="social-media">
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
              <span><FontAwesomeIcon icon={["fab", "facebook"]}/></span>
            </a>
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={["fab", "instagram"]}/></span>
            </a>
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={["fab", "tiktok"]}/></span>
            </a>
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={["fab", "linkedin"]}/></span>
            </a>
          </div>
          <p className="home-footer__p" style={{textAlign:"center"}}>Encuentranos en:</p>
          <p className="home-footer__p"><FontAwesomeIcon icon="fa-solid fa-location-dot" /> jr .tarapaca 918 Huánuco, Peru</p>
        </div>
    </div>
    <img className="redwoman" src="https://raw.githubusercontent.com/addleonel/ghcenter/main/racingwc/src/assets/static/logo/moto.png" />
    <p className="home-footer__copyright">
      2022 © Rosales Racing Motors - Reservados todos los derechos
    </p>
    </React.Fragment>
  );
}

export default Footer;