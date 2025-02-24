import { useContext, useEffect } from "react"
import ProductoComponent from "../../components/producto/ProductoComponent"
import { useParams } from "react-router-dom";
import {ProductContext} from "../../context/ProductContext";


const ProductoPage = () => {

  const {id} = useParams();
  const {producto, consultarProducto} = useContext(ProductContext)



  useEffect(() => {
    consultarProducto(id)
  }, [consultarProducto,id])
  

  return (
    <>
      <ProductoComponent 
                id = {producto.id}
                name = {producto.name} 
                img1 = {producto.img1} 
                img2 = {producto.img2}
                price = {producto.price} 
                desc = {producto.desc}
            />
    </>
  )
}

export default ProductoPage