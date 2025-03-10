import { useContext, useEffect } from "react"
import ProductoComponent from "../../components/producto/ProductoComponent"
import { ProductContext } from "../../context/ProductContext"
import { useParams } from "react-router-dom";


const ProductoPage = () => {
  const { id } = useParams();
  const { producto, consultarProducto } = useContext(ProductContext);

  useEffect(() => {
    if (id) {
      consultarProducto(id);
    }
  }, [id]);

  if (!producto) {
    return <p>Cargando producto...</p>;
  }
  
  return (
    <>
      <ProductoComponent producto={producto}/>
      
    </>
  )
}

export default ProductoPage