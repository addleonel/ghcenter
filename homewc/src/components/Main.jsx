import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Container } from "react-bootstrap";
import "../assets/styles/Main.scss";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {backendURL, buttonURL} from "../utils.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// products
import ProductItem from "./ProductItem";
import { results
 } from "../resultList.js";

const Main = () => {
	const contactURL = buttonURL;
	const [showp, setShowp] = useState(5);
	const [productList, setProductList] = useState([]);
	const sliderState = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: showp,
		slidesToScroll: 1
	}

	useEffect(()=>{	
		window.addEventListener('load', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});
	}, []);

	useEffect(()=>{	
		window.addEventListener('locationchange', ()=> {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});
	}, []);
	
	useEffect(()=>{	
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 1160) {
				setShowp(4);
			}
		});
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 923) {
				setShowp(3);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 710) {
				setShowp(2);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1160) {
				setShowp(5);
			}
		});
	}, []);

	useEffect(()=>{
		axios.get(backendURL+'api/products/')
			.then((res) => {
				console.log(res.data);
				setProductList(res.data);
			})
			.catch(err => {
				console.erro(err);
			})
		
	}, [])

	const resultList = productList.slice(0, 9).map((link) =>{
		return( 
			<React.Fragment>
				<div>
					<ProductItem 
						id={link.id}
						likes={link.likes.length}
						key={link.id}
						image={link.image}
						in_="in-products"
					/>
				</div>
			</React.Fragment>
		)
	});

    
	return (
		<React.Fragment>
			<section className="section-m section-1">
				<video id="mp4_src" className="portal-video" src="https://accezby-media-develop.nyc3.digitaloceanspaces.com/video/video.mp4" autoPlay muted loop></video>

				<Container>
					<div className="section-1-content">
						<div className="portal-phrase">
							<h1 className="portal-title">
							Te ofrecemos barras para cocinas, bar, reposteros, todo con base de granto
							</h1>
							<p className="portal-subtitle">
							Piedra italiana 100% natural.
								
							</p>
							<button 
                                className="principal__message-button"
                                onClick={() => window.location.href = contactURL}
                            >
                                Contactanos ahora
                            </button>
						</div>
						<div className="portal-media">
							<img className="portal-image pimage-1" src="https://images.pexels.com/photos/10827305/pexels-photo-10827305.jpeg" alt="" />
							<img className="portal-image pimage-2"src="https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg" alt="" />
							
						</div>
					</div>
				</Container>
			</section>
			<section className="section-m section-2">
				<Container fluid="xxl">
					<h2 className="category">Nuestros resultados</h2>
					<div className="c-container">
						<div className="products">   
							{resultList}
						</div>
						
						<HashLink style={{textDecoration: "none"}} to="/products/">Ver más</HashLink>
					</div>
				</Container>
			</section>
		</React.Fragment>
  );
}

export default Main;