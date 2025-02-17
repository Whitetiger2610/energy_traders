import { Button, Col, Image, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./form.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
  <div className="form"> 
    <h1 style={{color:'green'}}>Inicio de Sesión</h1>
    <Image src="Logo.png" fluid alt="logo" width={300} className="d-inline-block align-top" />
    <Form className="form">
      <Row className='mb-3 w-75'>
        <Form.Group className="mb-3" as={Col} controlId="formGridState">
            <Form.Label>Rol</Form.Label>
            <Form.Select className="custom-input" defaultValue="Choose...">
            <option value="admin">Administrador</option>
            <option value="client">Cliente</option>
            <option value="provider">Proveedor</option>
            <option value="manufacturer">Fabricante</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="custom-input" type="email" placeholder="Ingrese email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control className="custom-input" type="password" placeholder="Contraseña" />
        </Form.Group>
      </Row>
      <Row>
      <Col><Button type="submit">
            Ingresar
            </Button>
      </Col>
      <Col><Button as={Link} to="/" type="submit">
            Volver
      </Button>
      </Col>
      </Row>
    </Form>
  </div>
  );
}

export default Login;