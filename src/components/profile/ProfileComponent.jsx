import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './tab.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button, Figure, ListGroup, Table } from 'react-bootstrap';
import AddProduct from '../forms/AddProductComponent';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import {TiTrash } from 'react-icons/ti';

const Perfil =({user}) => {

const {setUser,filteredProductsbyUserId, eliminarProducto } = useContext(ProductContext)

useEffect(() => {
  if (user) {
    setUser(user);
  }
}, [user]);


  if (!user) {
    return <p>Cargando perfil de usuario...</p>;
  }

  return (
    <div className='tab'> 
        <h1 style={{color:'green'}}>Perfil de Usuario</h1>

        <Tabs
          defaultActiveKey="info"
          id="fill-tab"
          className="mb-5"
          fill
          justify
        >
          <Tab eventKey="info" title="Info Básica">
              <Container>
                <Figure>
                    <Row>
                      <Col>
                      <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src="perfil.png"                      
                      />
                      </Col>
                      <Col className='d-flex align-items-center'>
                      <Button className="d-flex gap-2" variant="secondary" size="sm">Añadir foto</Button>
                      </Col>
                    </Row>
                    <Figure.Caption>
                      <ListGroup>
                        <ListGroup.Item>Rol: {user.rol}</ListGroup.Item>
                        <ListGroup.Item>Nombre: {user.nombre} </ListGroup.Item>
                        {user.rol === "cliente" && <ListGroup.Item>Apellido: {user.apellido}</ListGroup.Item>}
                        {(user.rol === "proveedor"|| user.rol === "fabricante") && <ListGroup.Item>NIT: {user.nit}</ListGroup.Item>}
                        <ListGroup.Item>email: {user.email}</ListGroup.Item>
                      </ListGroup>
                    </Figure.Caption>
                  </Figure>
              </Container>
          </Tab>
          <Tab eventKey="other" title="Info Adicional" disabled>
            Info adicional
          </Tab>
          <Tab eventKey="history" title="Historial" disabled>
            Historial
          </Tab>
          <Tab eventKey="notify" title="Notificacion" disabled>
            Notificacion
          </Tab>
          <Tab eventKey="order" title="Pedidos" disabled>
            Pedidos
          </Tab>
          {(user.rol === "proveedor"|| user.rol === "fabricante") && <Tab eventKey="add" title="Agregar Productos">
            <AddProduct/>
          </Tab>}
          {(user.rol === "proveedor"|| user.rol === "fabricante") && <Tab eventKey="products" title="Ver sus Productos">
            
              <Table striped responsive variant='success' bordered hover size="sm">
              <thead className='fs-4'>
                  <tr>
                  <th>Codigo</th>
                  <th>Nombre Producto</th>
                  <th>Fabricante</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Eliminar</th>
                  </tr>
              </thead>
              <tbody>
          
               {filteredProductsbyUserId.length>0 ? (
              filteredProductsbyUserId.map(p => {
               return(
                <tr key={p.id} >
                <td>{p.codigo}</td>
                <td>{p.nombre}</td>
                <td>{p.marca}</td>
                <td>{p.precio}</td>
                <td>{p.stock}</td>
                <td><TiTrash 
                  className='fs-4'
                  style={{cursor:"pointer"}}
                  onClick={()=>{
                    if (window.confirm(`¿Estás seguro de eliminar el producto "${p.nombre}"?`)) {
                      eliminarProducto(p.id);
                    }
                  }}
                  />
                </td>    
                </tr>
                )
              })
            ): (
              <p>No se encontraron productos</p>  
            )}
            </tbody>
            </Table>
            </Tab>}
          
        </Tabs>
      

    </div>
  )
}

export default Perfil;