import { Carousel, Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductoComponent({id,name,marca,img1,img2,price,desc}) {


  return (
    <Card style={{ width: '100%', minWidth:'30rem', margin:'5px',padding:'10px',alignItems:'center'}}>
      <Row>
        <Col>
      <Carousel  className='custom-carousel' >
      <Carousel.Item >
        <Image src={img1} className="d-block w-100 carousel-img" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img2} className="d-block w-100 carousel-img" />
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{marca}</Card.Subtitle>
      <Card.Body>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Row>
        <Col><Button variant="dark">Añadir</Button></Col>
        <Col><Button variant="primary">Datasheet</Button></Col>
        </Row>
      </Card.Body>
      </Col>
      </Row>
    </Card>
  );
}

export default ProductoComponent;