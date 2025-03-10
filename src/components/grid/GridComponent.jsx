
import { useContext } from 'react'

import { ProductContext } from '../../context/ProductContext'
import CardComponent from '../card/cardComponent'

import './grid.css'


const GridComponent = () => {
    
    const { filteredProducts } = useContext(ProductContext)
   

  return ( 
    <div className='card-wrapper'>
        {
         
            filteredProducts.length>0 ? (
              filteredProducts.map((p)=> (
            <CardComponent 
                key={p.id}
                id = {p.id}
                nombre = {p.nombre} 
                imagen1 = {p.imagen1} 
                precio = {p.precio} 
                descripcion = {p.descripcion}
                producto = {p}
                
            />
          ))  
        ): (
          <p>No se encontraron productos</p>
        )}
    </div>
  )
}

export default GridComponent