import { Button, Col, Image, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

import "./form.css"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const Register = () => {

  const [rol,setRol] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [nit, setNit] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [shown, setShown] = useState(false)
  const navigate = useNavigate()


  const switchLabel = (rol === "cliente" || rol === "" ? "Apellido": "NIT")
  const switchShown = () => setShown(!shown);

  const onChange1 = ({ currentTarget }) => setPassword(currentTarget.value);
  const onChange2 = ({ currentTarget }) => setConfirmar(currentTarget.value);

  const {register} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Valores del formulario:", {
      rol, nombre, apellido, nit, email, password, confirmar
    });
    if (!rol.trim()){
      return window.alert('Todos los campos son obligatorias.')
    }
    if (rol === "cliente"){
      if (
        !email.trim() ||
        !password.trim() ||
        !nombre.trim() ||
        !apellido.trim() ||
        !confirmar.trim()
      ) {
        return window.alert('Todos los campos son obligatorias.')
      }
    }

    if (rol === "proveedor" || rol === "fabricante"){
      if (
        !email.trim() ||
        !password.trim() ||
        !nombre.trim() ||
        !nit.trim() ||
        !confirmar.trim()
      ) {
        return window.alert('Todos los campos son obligatorias.')
      }
    }

    if (!emailRegex.test(email)) {
      return window.alert('El formato del email no es correcto!')
    }
    
    
    const response = await register(rol, nombre, apellido, nit, email, password) 
    console.log("Respuesta de register:", response); // Debug

        if (response) {
          // console.log("Navegando a /"); // Debug
          //   navigate("/")
          console.log("Navegando a / en 1 segundo...");
         setTimeout(() => navigate("/"), 1000); 
        } else{
          console.log("Error en registro, no se redirige.");
        }
    
  }

  return (
  <div className="form"> 
    <h1 style={{color:'green'}}>Registro de Usuarios</h1>
    <Image src="Logo.png" fluid alt="logo" width={300} className="d-inline-block align-top" />
    <Form onSubmit={handleSubmit} className="form">
      <Row className='mb-3 w-50'>
      <Form.Group className="mb-3" as={Col} controlId="formGridState">
          <Form.Label>Rol</Form.Label>
          <Form.Select 
          className="custom-input" 
          value={rol} 
          onChange={(e)=> setRol(e.target.value)}>
          <option value="">Selecciona un rol</option>
          <option value="cliente">Cliente</option>
          <option value="proveedor">Proveedor</option>
          <option value="fabricante">Fabricante</option>
          </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
        className="custom-input" 
        type="text"
        name= "text" 
        placeholder="Ingresa Nombre"
        onChange={(e) => setNombre(e.target.value)}
        value= {nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupLastNameId">
        <Form.Label>{switchLabel}</Form.Label>
        <Form.Control 
        className="custom-input" 
        type="text" 
        name ={switchLabel}
        placeholder={`Ingresa ${switchLabel}`}
        onChange={(e) => (rol==="cliente") ? setApellido(e.target.value): setNit(e.target.value)}
        value={(rol==="cliente") ? apellido: nit}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        className="custom-input"
        type="email"
        name = "email"
        placeholder="Ingrese email"
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
          className="custom-input"
          type={shown ? 'text' : 'password'} 
          placeholder= "Contraseña"
          onChange ={onChange1}
          value={password}
          />
          <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control 
        className="custom-input"
        type={shown ? 'text' : 'password'}
        name ="confirmar" 
        placeholder="Confirmar Contraseña"
        onChange={onChange2}
        value={confirmar}
        />
        <Button size='sm' style={{margin:"5px"}} variant="outline-secondary" onClick={switchShown}>
        {shown ? 'Ocultar' : 'Mostrar'}</Button>
      </Form.Group>
      
      </Row>
      <Row>
        <Col>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      </Col>
      <Col>
 
      <Button as={Link} to="/" type="submit">
        Volver
      </Button>
      </Col>
      </Row>
    </Form>
  </div>
  );
}


export default Register;