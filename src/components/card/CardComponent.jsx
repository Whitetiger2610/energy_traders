
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function CardComponent({id,name,img1,price,desc}) {
  
      const navigate = useNavigate();
      const irAProducto = (productoId) => {navigate(`/productos/${productoId}`)}

  return (
    <Card style={{ width: '18rem', minWidth:'18rem', margin:'5px' }}>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Row>
        <Col><Button variant="primary" onClick={()=> irAProducto(id)}>Ver más</Button></Col>
        <Col><Button variant="dark">Añadir</Button></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;