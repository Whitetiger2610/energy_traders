import { Button, Col, Image, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./form.css"
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const {login} = useContext(UserContext);
  // const navigate = useNavigate()

  const [shown, setShown] = useState(false)

 
  const switchShown = () => setShown(!shown);

      // const handleSubmit = async (e) => {
      //     e.preventDefault();
          
      //         const response = await login(email, password);
           
      //         if (response) {
      //             navigate("/")
      //         }
         
      //     }


  return (
  <div className="form"> 
    <h1 style={{color:'green'}}>Inicio de Sesión</h1>
    <Image src="Logo.png" fluid alt="logo" width={300} className="d-inline-block align-top" />
    <Form className="form"> {/*onSubmit={handleSubmit}*/ }
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
            <Form.Control 
            className="custom-input" 
            type={shown ? 'text' : 'password'}
            placeholder="Contraseña"
            // onChange={(e) => setPassword(e.target.value)}
            // value = {password}
            /> 
            <Button size='sm' style={{margin:"5px"}} variant="outline-secondary" onClick={switchShown}>
            {shown ? 'Ocultar' : 'Mostrar'}</Button>
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