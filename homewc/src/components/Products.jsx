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
import {llantas, 
    sistemaArrastre,
    sistemaElectrico,
    sistemaMotor,
    luces,
    accesoriosMotor, 
    accesoriosPiloto,
    sistemaFrenos
} from "../productsList.js";
const Products = () => {
    const listLlantas =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaArrastre =  sistemaArrastre.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaElectrico =  sistemaElectrico.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaMotor =  sistemaMotor.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });


    const listLuces =  luces.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listAccesorioMotor =  accesoriosMotor.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listAccesorioPiloto =  accesoriosPiloto.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaFrenos =  sistemaFrenos.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
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
                        Descubre nuestros productos
                    </h1>
                    <p className="portal-subtitle">
                        Explora nuestro catalogo
                    </p>
                </div>
            </Container>
        </section>
        <section className="category-menu-container">
            <Container>
                <div className="category-menu-list marquee">
                    {/* <HashLink  to="/products/#llantas" className="category-menu-item__link">Llantas</HashLink> */}
                    <HashLink  to="/products/#sistema-arrastre" className="category-menu-item__link">Sistema de arrastre</HashLink>
                    <HashLink  to="/products/#sistema-electrico" className="category-menu-item__link">Sistema electrico</HashLink>
                    {/* <HashLink  to="/products/#sistema-motor" className="category-menu-item__link">sistema de motor</HashLink> */}
                    {/* <HashLink  to="/products/#luces" className="category-menu-item__link">Luces</HashLink> */}
                    <HashLink  to="/products/#accesorios-motor" className="category-menu-item__link">Accesorios para motor</HashLink>
                    <HashLink  to="/products/#accesorios-piloto" className="category-menu-item__link">Accesorios para piloto</HashLink>
                    {/* <HashLink  to="/products/#sistemas-frenos" className="category-menu-item__link">Sistema de frenos</HashLink> */}
                </div>
            </Container>
        </section>
        <span id="llantas"></span>
        <span id="sistema-arrastre"></span>
        <span id="sistema-electrico"></span>
        <span id="sistema-motor"></span>
        <span id="luces"></span>
        <span id="accesorios-motor"></span>       
        <span id="accesorios-piloto"></span>
        <span id="sistemas-frenos"></span>
        <Container fluid="xxl" >
            <Tab.Container id="left-tabs-example" defaultActiveKey="2">
                <Row className="left-tabs-example">
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {/* <Nav.Item>
                            <Nav.Link  eventKey="1" >Llantas</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link eventKey="2">Sistema de arrastre</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">Sistema electrico</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="4">Sistema de motor</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link eventKey="5">Luces</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link eventKey="6">Accesorios para motor</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="7">Accesorios para piloto</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="8">Sistema de frenos</Nav.Link>
                        </Nav.Item>                                                     */}
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        {/* <Tab.Pane eventKey="1">
                            <h2 id="llantas" >Llantas </h2>
                            <div className="products">
                                {listLlantas}
                            </div>
                        </Tab.Pane> */}
                        <Tab.Pane eventKey="2">
                            <h2 id="sistema-arrastre">Sistema de arrastre</h2>
                            <div className="products">   
                                {listSistemaArrastre}
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                            <h2 id="sistema-electrico">Sistema electrico</h2>
                            <div className="products">   
                                {listSistemaElectrico}
                            </div>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="4">
                            <h2 id="sistema-motor">Sistema de motor</h2>
                            <div className="products">   
                                {listSistemaMotor}
                            </div>
                        </Tab.Pane> */}
                        {/* <Tab.Pane eventKey="5">
                            <h2 id="luces">Luces</h2>
                            <div className="products">   
                                {listLuces}
                            </div>
                        </Tab.Pane> */}
                        <Tab.Pane eventKey="6">
                            <h2 id="accesorios-motor">Accesorios para motor</h2>
                            <div className="products">   
                                {listAccesorioMotor}
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="7">
                            <h2 id="accesorios-piloto">Accesorios para piloto</h2>
                            <div className="products">   
                                {listAccesorioPiloto}
                            </div>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="8">
                            <h2 id="sistemas-frenos">Sistema de frenos</h2>
                            <div className="products">   
                                {listSistemaFrenos}
                            </div>
                        </Tab.Pane> */}
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    </React.Fragment>
  );
}

export default Products;