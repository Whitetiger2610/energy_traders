import { Carousel, Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ProductoComponent= ({producto})=> {

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (
    <Card style={{ width: '100%', minWidth:'30rem', margin:'5px',padding:'10px',alignItems:'center'}}>
      <Row>
        <Col md={6} className='d-flex justify-content-center'>
      <Carousel  className='custom-carousel' >
      <Carousel.Item >
        <Image src={producto.imagen1} className="d-block border w-100 carousel-img object-fit-contain" style={{ maxHeight: '400px', objectFit: 'contain' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={producto.imagen2} className="d-block border w-100 carousel-img object-fit-contain" style={{ maxHeight: '400px', objectFit: 'contain' }}/>
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col md={6}>
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Subtitle>{producto.marca}</Card.Subtitle>
      <Card.Body>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Card.Text>
          $ {producto.precio}
        </Card.Text>
        <Row className='g-3'>
        <Col><Button variant="dark" block="true">Añadir</Button></Col>
        <Col><Button variant="primary" block="true">Datasheet</Button></Col>
        </Row>
      </Card.Body>
      </Col>
      </Row>
    </Card>
  );
}

export default ProductoComponent;