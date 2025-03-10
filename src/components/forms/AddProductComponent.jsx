import { Button, Image, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./form.css"
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const AddProduct = ()=> {

  const [codigo,setCodigo] = useState('')
  const [nombre,setNombre] = useState('')
  const [marca,setMarca] = useState('')
  const [imagen1,setImagen1] = useState('')
  const [imagen2,setImagen2] = useState('')
  const [precio,setPrecio] = useState('')
  const [stock,setStock] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const {agregarProducto} = useContext(ProductContext)
  const { user } = useContext(UserContext);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Informacion del producto:", {
      codigo,nombre,marca,precio,stock,imagen1,imagen2, descripcion,usuario_id:user?.id
    });

    console.log("usuario: ", user)
    
    if (
      !codigo.trim() ||
      !nombre.trim() ||
      !marca.trim() ||
      !precio.trim() ||
      !stock.trim() ||
      !imagen1.trim() ||
      !imagen2.trim() ||
      !descripcion.trim()
    ) {
      return window.alert('Todos los campos son obligatorias.')
    }

    if (!user || !user.id) {
      return window.alert('No estás autenticado. Inicia sesión para agregar productos.');
    }
    
    const nuevoProducto = {
      codigo,
      nombre,
      marca,
      precio,
      stock,
      imagen1,
      imagen2,
      descripcion,
      usuario_id: user.id,  // ✅ Se agrega el ID del usuario autenticado
    };

    const response = await agregarProducto(nuevoProducto) 
    console.log("Respuesta de productos:", response); // Debug

        if (response) {
          console.log("Navegando a / en 1 segundo...");
         setTimeout(() => navigate("/productos"), 1000); 
        } else{
          console.log("Error en agregar producto, no se redirige.");
        }
    
  }

  return (
  <div className="form"> 
    <h1 style={{color:'green'}}>Registro de Producto</h1>
    <Image src="Logo.png" fluid alt="logo" width={300} className="d-inline-block align-top" />
    <Form onSubmit={handleSubmit} className="form">
      <Row className='mb-3 w-50'>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Código</Form.Label>
        <Form.Control className="custom-input" 
        type="text"
        name= "text" 
        placeholder="Ingresa Código"
        onChange={(e)=>setCodigo(e.target.value)}
        value={codigo}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control className="custom-input" 
        type="text" 
        placeholder="Ingresa Nombre"
        onChange={(e)=>setNombre(e.target.value)}
        value={nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBrand">
        <Form.Label>Marca</Form.Label>
        <Form.Control className="custom-input" 
        type="text"
        placeholder="Marca"
        onChange={(e)=>setMarca(e.target.value)}
        value={marca}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control className="custom-input" 
        type="number" 
        placeholder="precio"
        onChange={(e)=>setPrecio(e.target.value)}
        value={precio}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStock">
        <Form.Label>Stock</Form.Label>
        <Form.Control className="custom-input" 
        type="number"
        placeholder="stock"
        onChange={(e)=>setStock(e.target.value)}
        value={stock}
        />
      </Form.Group>
      <Form.Group controlId="formImagen1" className="mb-3">
        <Form.Label>Imagen 1</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Agregar URL imagen1"
        onChange={(e)=>setImagen1(e.target.value)}
        value={imagen1}
        />
      </Form.Group>
      {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Imagen 1</Form.Label>
        <Form.Control 
        type="file" 
        // placeholder="Agregar link imagen1"
        onChange={(e)=>setImagen1(e.target.value)}
        value={imagen1}
        />
      </Form.Group> */}
      <Form.Group controlId="formImagen2" className="mb-3">
        <Form.Label>Imagen 2</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Agregar URL imagen2"
        onChange={(e)=>setImagen2(e.target.value)}
        value={imagen2}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3}
        type= "text"
        onChange={(e)=>setDescripcion(e.target.value)}
        value={descripcion}
        
        />
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