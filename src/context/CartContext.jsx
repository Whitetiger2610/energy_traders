import { createContext, useState } from "react"
import api from "../api";


//Creación Contexto
export const CartContext = createContext();

//Creación Provider

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
//Creación Funcion agregar

 const agregarCart = (producto) => {
    const index = cart.findIndex((item) => item.id === producto.id);
    if (index !== -1){
        const newCart = [...cart]
        newCart[index].quantity += 1;
        setCart(newCart);
    } else {
        setCart([...cart, {...producto, quantity:1}]);
    }

 }

//Creación Función eliminar

const eliminarCart = (productoId) => {
    const index = cart.findIndex((item) => item.id === productoId);
    if (index === -1) return;
    let newCart = [...cart]

    if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
    } else {
        newCart = newCart.filter ((producto) => producto.id !==productoId)
    }
    setCart(newCart);
}


//Creación función Total compra

const obtenerTotal = () => {
    return cart.reduce ((acc, item) => acc + item.precio*item.quantity, 0)
}

//Creacion funcion cantidad de productos
const cantidadTotal = () => {
    return cart.reduce ((acc,item) => acc + item.quantity, 0)
}

//Función para enviar productos del carrito al backend

const enviarCart = async (pedido) => {

    const token = localStorage.getItem("token");
    console.log("token",token)

    if (!token) {
      alert("Debes iniciar sesión para enviar el pedido.");
      return false;
    }

    // const response = await fetch("http://localhost:3000/pedidos", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(pedido),
    //   });
    try{
      const response = await api.post("/pedidos", pedido, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // const data = await response.json();
      // if (response.ok) {
      // alert(response.data?.error || "Envio Exitoso!");
      // localStorage.setItem("token", response.data.token);
      alert("Pedido enviado con éxito")
      setCart([])
      return true;

      } catch(error) {
        alert(error.response.data?.error || "Error al enviar el pedido")
        return false;
      }
}


  return (
    <CartContext.Provider
    value = {{cart, setCart, agregarCart, eliminarCart,obtenerTotal,cantidadTotal, enviarCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider

