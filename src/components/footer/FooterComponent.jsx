import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">

          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Energy Traders MarketPlace</h5>
            <p>
              El mayor marketplace de productos y servicios de energias renovables ¡Contáctanos para más información!
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Inicio</a></li>
              <li><Nav.Link as={NavLink} to="/productos" className="text-white text-decoration-none">Productos</Nav.Link></li>
              <li><a href="/servicios" className="text-white text-decoration-none">Servicios</a></li>
              <li><a href="/contacto" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Síguenos</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com" className="text-white fs-4" ><FaFacebook /></a>
              <a href="https://instagram.com" className="text-white fs-4"><FaInstagram /></a>
              <a href="https://twitter.com" className="text-white fs-4"><FaTwitter /></a>
              <a href="https://linkedin.com" className="text-white fs-4"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-light mt-4" />
        <p className="text-center">© {new Date().getFullYear()} Energy Traders. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
