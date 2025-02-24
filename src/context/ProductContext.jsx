import { createContext, useEffect, useState } from "react"


export const ProductContext = createContext({});


const ProductProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
      consultarProductos()

    }, [])

    const consultarProductos= async() =>{
        const url = '/productos.json' // http://localhost:3000/productos
        const response = await fetch(url) 
        const data = await response.json()
        setProductos(data)   
    }

    const consultarProducto = async(id) =>{

      const url = "/productos.json"; // http://localhost:3000/productos
      try{
        const response = await fetch(url); // fetch(`${url}/${id}`)
        if(!response.ok){
          throw new Error("Error al cargar el archivo JSON")
        }
        const data = await response.json();

        const productoEncontrado = data.find(producto => producto.id === id); 

        if (!productoEncontrado){
          throw new Error("No se enconcontró ningún producto con ese ID");
        }

        setProducto(productoEncontrado);
        setError(null)
      } catch (err){
        setError(err.message)
        setProducto(null)
      }
    }
    
  return (
    <ProductContext.Provider value={{productos, setProductos, producto, setProducto, consultarProducto}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;

