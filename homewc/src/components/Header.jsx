import React, {useEffect} from "react";

import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/styles/Header.scss';
import buttonURL from "../utils";

const Header = () => {
  const contactURL = buttonURL;
  // Change background color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 66){
      let nb = document.getElementById('navbarroot-id');
      nb.style.background = '#fff';
      nb.style.boxShadow = '0px 3px 3px rgba(27, 51, 78, 0.09)';
    }else {
      let nb = document.getElementById('navbarroot-id');
      nb.style.background = 'transparent';
      nb.style.boxShadow = 'none';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground); 
  })

  // display company options 
  useEffect(() => {
    let buttonoptions = document.getElementById('nav-bar__buttons-item--company-id');
    let options = document.getElementById('nav-bar-options-company-id');
    let optionsContainer = document.getElementById('nav-bar-options-company-container-id');
    buttonoptions.addEventListener('mouseover', () => {
      options.style.display = 'block';
      optionsContainer.style.display = 'block';
      document.getElementById('navbarroot-id').style.background = 'transparent';
    });
    buttonoptions.addEventListener('mouseout', () => {
      options.style.display = 'none';
      optionsContainer.style.display = 'none';
    });
    options.addEventListener('mousemove', () => {
      options.style.display = 'block';
      optionsContainer.style.display = 'block';
      document.getElementById('navbarroot-id').style.background = 'transparent';
    });
    options.addEventListener('mouseleave', () => {
      options.style.display = 'none';
      optionsContainer.style.display = 'none';
      document.getElementById('navbarroot-id').style.background = '#fff';
    });     
  });
  
  const hideCompanyOptions = () => {
    let options = document.getElementById('nav-bar-options-company-id');
    let optionsContainer = document.getElementById('nav-bar-options-company-container-id');
    options.style.display = 'none';
    optionsContainer.style.display = 'none';
    document.getElementById('navbarroot-id').style.background = '#fff';
  }

  // reponsive options
  const displayResponsive = (e) => {
    e.preventDefault();
    let responsiveBlock = document.getElementById("nav-bar__responsive");
    if (responsiveBlock.className === "nav-bar__responsive--none") {
        responsiveBlock.className = "nav-bar__responsive--block";
    } else if (responsiveBlock.className === "nav-bar__responsive--block") {
        responsiveBlock.className = "nav-bar__responsive--none";
    }
  }

  const disableMenu = (e) => {

      let responsiveBlock = document.getElementById("nav-bar__responsive");
      if (responsiveBlock.className === "nav-bar__responsive--block") {
          responsiveBlock.className = "nav-bar__responsive--none";
      }
  }

  const enableMenu = (e) => {
      e.stopPropagation();
      let menu = document.getElementById("nav-bar__responsive-list-id");
      menu.style.display = "block";
  }

  return (
    <React.Fragment>
      <nav id="navbarroot-id" className="navbarroot">
        <Container fluid="xxl" className="nav-bar"> 
            <a className="nav-bar__logo" href="/">
              <img className="nav-bar__logo-image" src="https://raw.githubusercontent.com/addleonel/ghcenter/main/homewc/src/assets/static/logo/logo.png"alt=""/>
                 <span className="nav-bar__logo-text">Granitos Home Center</span>
            </a>
            <button className="nav-bar__button-item nav-bar__buttons-item--subscribe nav-bar__buttons-item--subscribe-responsive" onClick={() => window.location.href = contactURL}>Contactar</button>
            
            <div className="nav-bar__display" id="nav-bar__display-id" onClick={ displayResponsive }>
                <img className="nav-bar__display-icon" src="https://raw.githubusercontent.com/addleonel/ghcenter/59ef2cad24ca811449366d46ee576a8100de17a8/homewc/src/assets/static/icons/bars.svg" alt=""/> 
            </div>
            
            <div className="nav-bar__buttons">
                <button id="nav-bar__buttons-item--company-id" className="nav-bar__buttons-item nav-bar__buttons-item--company">Empresa <FontAwesomeIcon icon="fa-solid fa-caret-down" /></button>
                <Link className="nav-bar__buttons-item nav-bar__buttons-item--business"  to="/products/">Productos</Link>
                <button className="nav-bar__button-item nav-bar__buttons-item--subscribe" onClick={() => window.location.href = contactURL}>Contactar</button>                                                                                                         
            </div>
        </Container>         
      </nav>
        <div id="nav-bar-options-company-container-id">
          <div id="nav-bar-options-company-id" className="nav-bar-options">
              <Container className="options-items">
                <Fade cascade direction="right" duration={500}>
                  <Link className="nav-bar__buttons-item items-container" to="/about/" onClick={hideCompanyOptions}>
                    <FontAwesomeIcon className="items-icon" icon="fa-solid fa-address-card"/>
                    <h3 className="items-title">Sobre nosotros</h3>
                    <p className="items-text"></p>
                  </Link>
                  <Link className="nav-bar__buttons-item items-container" to="/contact/" onClick={() => window.location.href = contactURL}>
                    <FontAwesomeIcon className="items-icon" icon="fa-solid fa-address-book"/>
                    <h3 className="items-title">Contacto</h3>
                    <p className="items-text"></p>
                  </Link>
                  <a className="nav-bar__buttons-item items-container" href="https://app.powerbi.com/reportEmbed?reportId=05946fcc-c3c5-4353-b30f-9bafab74a12b&autoAuth=true&ctid=edfcf439-4a57-41f4-b919-d8f8adba4657&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="items-icon" icon="fa-solid fa-chart-line" />
                    <h3 className="items-title">Nuestras ventas</h3>
                    <p className="items-text"></p>
                  </a>
                </Fade> 
              </Container>
          </div>
        </div>
      <section id="nav-bar__responsive" className="nav-bar__responsive--none"  onClick={ disableMenu }>
        <ul id="nav-bar__responsive-list-id" className="nav-bar__responsive-list" onClick={ enableMenu }>
            <li className="nav-bar__responsive-li" ><Link id="about-res"  onClick={ disableMenu } className="nav-bar__responsive-item" to="/about/">Sobre Nosotros</Link></li>
            <li className="nav-bar__responsive-li" ><Link id="contact-res" className="nav-bar__responsive-item" to="/contact/" onClick={() => window.location.href = contactURL}>Contacto</Link></li>
            <li className="nav-bar__responsive-li" ><Link id="products-res"  onClick={ disableMenu } className="nav-bar__responsive-item" to="/products/">Productos</Link></li>
        </ul>                                                       
      </section>
    </React.Fragment>
  );
}

export default Header;