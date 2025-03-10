import { createContext, useEffect, useState } from "react"
import api from "../api";


export const ProductContext = createContext();


const ProductProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState(null)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user")); // Recuperar usuario
  if (storedUser) {
    setUser(storedUser);
  }
  consultarProductos();

    }, [])

    const consultarProductos= async() =>{
        // const url =  "http://localhost:3000/productos" //
        try {
          // const response = await fetch(url, {
          //   method : "GET"
          // }) 
          const response = await api.get("/productos");

          // const data = await response.json()
          setProductos(response.data);
        }  catch (err) {
          console.error("Error al cargar los productos:", err);
       }
     }

    const consultarProducto = async(id) =>{

      // const url =  `http://localhost:3000/productos/${id}`
      try{
        // const response = await fetch(url,{ // fetch(url);
        //   method : "GET"
        // })  
        const response = await api.get(`/productos/${id}`);
        // if(!response.ok){
        //   throw new Error("Error al cargar el archivo JSON")
        // }
        // const data = await response.json();
        setProducto(response.data);
        setError(null)
      } catch (err){
        setError("Error al cargar el producto")
        setProducto(null)
      }
    }

    

    const agregarProducto = async (producto) => {
      
      const token = localStorage.getItem("token");

      if (!token) {
          alert("No tienes permisos para agregar un producto.");
          return;
      }
      
      try {
      //   const response = await fetch("http://localhost:3000/productos", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`
      //   },
      //   body: JSON.stringify(producto),
      // });
      const response = await api.post("/productos", producto, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // const data = await response.json();
    
    
      // if (!response.ok) { 
      //   throw new Error(response.data.error || "Error en agregar producto"); 
      //   }
    
      alert("Producto agregado con éxito");
    
      consultarProductos();
      return response.data
        } catch (error) {
          alert(error.response?.data?.error || "Error al agregar producto"); // 
          
      }
    };
    const filteredProducts = productos.filter((p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const filteredProductsbyUserId = user
  ? productos.filter((p) => p.usuario_id === user.id)
  : [];

  const eliminarProducto = async (id) => {

    const token = localStorage.getItem("token");

      if (!token) {
          alert("No tienes permisos para eliminar un producto.");
          return;
      }
     try{ 
    // const response = await fetch(`http://localhost:3000/productos/${id}`, {
    //   method: "DELETE",
    //   headers:{
    //     Authorization: `Bearer ${token}`,
    //   }
    // });

    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.error || "Error al eliminar el producto");
    // }
    await api.delete(`/productos/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Producto eliminado con éxito");

    
    setProductos((prevProductos) => prevProductos.filter((p) => p.id !== id));
  } catch (error) {
    
    alert(error.response?.data?.error || "Error al eliminar producto");
  }
};

    
  return (
    <ProductContext.Provider value={{productos, setProductos, producto, setProducto, consultarProducto,consultarProductos, agregarProducto,search,setSearch,filteredProducts, filteredProductsbyUserId,setUser, eliminarProducto}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;

