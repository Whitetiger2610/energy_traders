
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


function CardComponent({id,nombre,imagen1,precio,descripcion,producto}) {
  
      const navigate = useNavigate();
      const {agregarCart} = useContext(CartContext)
      const irAProducto = (productoId) => {navigate(`/productos/${productoId}`)}

  return (
    <Card style={{ width: '18rem', minWidth:'18rem', margin:'5px' }}>
      <Card.Title>{nombre}</Card.Title>
      <Card.Img variant="top" src={imagen1} />
      <Card.Body>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          $ {precio}
        </Card.Text>
        <Row>
        <Col><Button variant="primary" onClick={()=> irAProducto(id)}>Ver más</Button></Col>
        <Col><Button variant="dark" onClick={()=>{agregarCart(producto)}} >Añadir</Button></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;