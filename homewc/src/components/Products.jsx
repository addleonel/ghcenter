import * as React from "react";
import { Container,
    Tab, 
    Row, 
    Nav, 
    Col,

} from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/styles/Main.scss";
import ProductItem from "./ProductItem";
import { HashLink } from "react-router-hash-link";
import {results
} from "../resultList.js";
const Products = () => {
    const resultList =  results.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    image={link.image}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    
    return (
    <React.Fragment>
        <section className="section-p section-1">
            <Container fluid="xxl">
                <div className="portal-phrase">
                    <h1 className="portal-title">
                        Explora nuestros Resultados
                    </h1>
                    {/* <p className="portal-subtitle">
                        Explora nuestro catalogo
                    </p> */}
                </div>
            </Container>
        </section>

        <Container fluid="xxl" >
            <div className="products" style={{marginTop: "40px"}}>   
                {resultList}
            </div>
                     
        </Container>
    </React.Fragment>
  );
}

export default Products;