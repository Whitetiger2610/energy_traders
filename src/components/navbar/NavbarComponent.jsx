import { Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

import './navbar.css'

const NavBar =() => {
  const setActiveClass = ({isActive}) => (isActive ? "active" : null);
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top ">
      <Container>
        <Navbar.Brand href="/">
        <Image src="Logo.png" fluid alt="logo" width={200} className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end className={setActiveClass} >Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/login" className={ setActiveClass} >Login</Nav.Link>
            <Nav.Link as={NavLink} to="/registro" className={ setActiveClass}>Registro</Nav.Link>
            <Nav.Link as={NavLink} to="/productos" className={ setActiveClass}>Productos</Nav.Link>
            <NavDropdown className="navbar__items--right" title="Opciones" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="#servicios">Servicios</NavDropdown.Item>
            <NavDropdown.Item href="#fabricantes">Fabricantes</NavDropdown.Item>
            <NavDropdown.Item href="#proveedores">Proveedores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contacto">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;