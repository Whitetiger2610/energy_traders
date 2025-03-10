import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { Button,Pagination, Table } from 'react-bootstrap';

import "./cart.css"
import { useNavigate } from 'react-router-dom';

const CartComponent = () => {

    const [total,setTotal] = useState('')
    const [cantidad,setCantidad] = useState('')
    const navigate = useNavigate()

    const {cart, setCart,agregarCart, eliminarCart, obtenerTotal,cantidadTotal,enviarCart} = useContext(CartContext);
    const {profile,user} = useContext(UserContext)
    
    const token = localStorage.getItem("token")


    useEffect(() => {
        if (token){
      profile()
      setTotal(obtenerTotal())
        setCantidad(cantidadTotal());
        }
    }, [profile]);

    
  
    const handleSent = async(e) => {
        e.preventDefault();
        

        const nuevoPedido = {
            total,
            cantidad,
            usuario_id:user.id
        };
        const response = await enviarCart(nuevoPedido) 
        console.log("Respuesta de pedido:", response); // Debug
    
            if (response) {
                console.log("Pedido enviado con éxito, vaciando carrito...");
                setCart([])
                console.log("Navegando a / en 1 segundo...");
             setTimeout(() => navigate("/productos"), 1000); 
             
            } else{
              console.log("Error en agregar pedidoo, no se redirige.");
            }
       
    }

    

  return (
    <div onSubmit={handleSent} className="cart">
                <h1> Carrito de Compras</h1>    
                <Table striped responsive variant='success' bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Codigo</th>
                    <th>Nombre Producto</th>
                    <th>Fabricante</th>
                    <th className='cantCol'>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(producto => {
                return(
                    <tr key={producto.id} >
                    <td>{producto.codigo}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.marca}</td>
                    <td className='cantCol'>{producto.quantity}
                        <Pagination>
                            <Pagination.Prev onClick={() =>{
                                        eliminarCart(producto.id)
                                    }} />
                            <Pagination.Next onClick={()=>{
                                        agregarCart(producto)
                                    }
                                    } />
                        </Pagination>
                    </td>
                    <td>$ {producto.precio}</td>
                    <td>$ {producto.precio*producto.quantity}</td>
                    </tr>
                   
                )
                })
                }
                <tr>
                    <td  className='totalRow fs-4 fw-bold' colSpan={5}>TOTAL</td>
                    <td className='fs-4 fw-bold'>$ {obtenerTotal()}</td>
                </tr>
                </tbody>
                </Table>
                <div className="d-flex justify-content-center" >
                {token? (<Button onClick={handleSent} size='lg'>Realizar Pedido</Button>):(<Button disabled >Realizar Pedido</Button>)}
                </div>

            
                
        </div>
  )
}

export default CartComponent