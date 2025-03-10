import { Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";

import './navbar.css'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

const NavBar =() => {

  const {user, logout} = useContext(UserContext)
  const {cantidadTotal} = useContext(CartContext)

  const setActiveClass = ({isActive}) => (isActive ? "active" : null);

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top ">
      <Container>
        <Navbar.Brand href="/">
        <Image src="Logo.png" fluid alt="logo" width={200} className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end className={setActiveClass} >Inicio</Nav.Link>
            {!user && <Nav.Link as={NavLink} to="/login" className={ setActiveClass} >Login</Nav.Link>}
            {!user && <Nav.Link as={NavLink} to="/registro" className={ setActiveClass}>Registro</Nav.Link>}
            {user && <Nav.Link as={NavLink} to="/perfil" className={ setActiveClass}>Perfil</Nav.Link>}
            <Nav.Link as={NavLink} to="/productos" className={ setActiveClass}>Productos</Nav.Link>
            <NavDropdown className="navbar__items--right" title="Opciones" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/servicios" className={setActiveClass}>Servicios</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/fabricantes" className={setActiveClass}>Fabricantes</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/proveedores" className={setActiveClass}>Proveedores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/contacto" className={setActiveClass}>
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/contacto" >Ayuda</Nav.Link>
            <Nav.Link as={NavLink} to="/sales">Ofertas</Nav.Link>
            {user && <Nav.Link as={NavLink} to="/" onClick={()=>{
                    if (window.confirm(`¿Estás seguro de cerrar sesión"?`)) {
                      logout();
                    }
                  }}>Cerrar Sesión</Nav.Link>}
                                                            
            <Nav.Link as={NavLink} to="/carrito"><TiShoppingCart className='fs-4'/>{cantidadTotal()}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;