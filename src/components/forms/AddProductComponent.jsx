import { Button, Col, Image, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./form.css"

function AddProduct() {
  return (
  <div className="form"> 
    <h1 style={{color:'green'}}>Registro de Producto</h1>
    <Image src="Logo.png" fluid alt="logo" width={300} className="d-inline-block align-top" />
    <Form className="form">
      <Row className='mb-3 w-50'>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control className="custom-input" type="text" placeholder="Ingresa Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBrand">
        <Form.Label>Marca</Form.Label>
        <Form.Control className="custom-input" type="text" placeholder="Marca" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Imagenes de referencia</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descipcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Precio</Form.Label>
        <Form.Control className="custom-input" type="text" placeholder="precio" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Stock</Form.Label>
        <Form.Control className="custom-input" type="number" placeholder="stock" />
      </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  </div>
  );
}

export default AddProduct;