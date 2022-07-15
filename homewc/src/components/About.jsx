import * as React from "react";
import "../assets/styles/Footer.scss";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";


class GoogleMap extends React.Component {
    iframe = () => {
        return {
          __html: this.props.iframe
        }
    }
    
    render = () => {
        return (
          <div>
            <div dangerouslySetInnerHTML={ this.iframe() } />
          </div>
        );
      }
}

const About = () => {
    const iframe_= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.1592773704772!2d-76.24114652154138!3d-9.93456259230993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e43f92a607%3A0xf80ee8abec44cb1e!2sTarapaca%20898-1008%2C%20Hu%C3%A1nuco%2010001!5e0!3m2!1ses-419!2spe!4v1655955500139!5m2!1ses-419!2spe" width="100%" height="450" style="border:0;" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <React.Fragment>
        <Container>
            <div className="about-content">
                <div className="about-content-text">
                    <h1>Sobre Nosotros</h1>
                 
                    <h2>Misión</h2>
                    
                    <p>
                    Somos una empresa dedicada a la venta y comercialización de repuestos originales y accesorios para motocicletas, apoyados en un equipo humano calificado que con actitud de servicio y honestidad brinda asesoría personalizada y servicio técnico a usuarios de motocicletas en diferentes puntos de ventas ubicados estratégicamente en la ciudad de Huánuco. Contamos con disponibilidad de repuestos y accesorios para atender las necesidades del mercado local logrando así la competitividad y la rentabilidad.
                    </p>
                    <h2>Visión</h2>
                    <p>
                    Ser la mejor opción para los usuarios de motocicletas, para transporte, trabajo, diversión o deporte, a nivel local y nivel nacional, así como la opción preferida para todos los canales de distribución de repuestos y accesorios para motocicletas. Para nuestros colaboradores una fuente segura de trabajo y de desarrollo profesional y laboral. 
                    </p>

                    <h2>Objetivos</h2>
                    <ul>
                        <li>Ofrecer un servicio de calidad en la venta de motocicletas y accesorios originales.</li>
                        <li>Cumplir y superar las expectativas de nuestros clientes.</li>
                        <li>Capacitar a nuestro personal de forma continua.</li>
                        <li>Fidelizar a nuestros clientes mediante la entrega de una propuesta de excelencia</li>
                    </ul>
                    <h2>Historia</h2>
                    <p>
                    Racing Motors es un grupo empresarial peruano fundado en 1998, que se dedica a la importación y representación de las mejores marcas en motocicletas, repuestos, accesorios e indumentaria, para (motocicletas, scooters, trimoviles y cuatrimotos) nuestras 2 centros de distribución ubicados en ciudades estratégicas de nuestra ciudad de huanuco, nos permite lograr la cobertura total a nivel local y atender a nuestros clientes, con rapidez y eficiencia, que sumado a nuestras 5 líneas de negocio: línea de lubricantes, línea de motocicletas, línea de repuestos y accesorios, línea de neumáticos, nos permiten lograr cumplir con los requerimientos y surtido que nuestros clientes solicitan. una característica importante de nuestra empresa es la de trabajar desde su creación, con las mejores marcas y calidad en cada línea; con marcas líderes a nivel nacional e internacional.
                    </p>
                    <GoogleMap iframe={iframe_}/>
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default About;